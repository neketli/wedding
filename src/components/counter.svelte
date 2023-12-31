<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import FlowerLeft from '$lib/images/counter-left-flower.png';
	import FlowerRight from '$lib/images/counter-right-flower.png';
	import Photo from '$lib/images/counter-photo.png';
	import Tape1 from '$lib/images/counter-tape1.png';
	import Tape2 from '$lib/images/counter-tape2.png';

	let timer = [
		{
			label: 'Дней',
			labels: ['день', 'дня', 'дней'],
			id: 'd',
			value: '0'
		},
		{
			label: 'Часов',
			labels: ['час', 'часа', 'часов'],
			id: 'h',
			value: '0'
		},
		{
			label: 'Минут',
			labels: ['минута', 'минуты', 'минут'],
			id: 'm',
			value: '0'
		},
		{
			label: 'Секунд',
			labels: ['секунда', 'секунды', 'секунд'],
			id: 's',
			value: '0'
		}
	];

	const wedding = new Date(2023, 7, 23, 16);

	let timerId: NodeJS.Timer;

	const getDeclension = (num: number, words: string[]) => {
		return words[
			num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		];
	};

	const updateTimer = () => {
		const diff = (wedding as any) - (new Date() as any);
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const param = {
			d: diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
			h: diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
			m: diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0,
			s: diff > 0 ? Math.floor(diff / 1000) % 60 : 0
		};

		timer = timer.map((item) => {
			const value = param[item.id as keyof typeof param];

			return {
				...item,
				value: value < 10 ? `0${value}` : `${value}`,
				label: getDeclension(value, item.labels)
			};
		});
	};

	onMount(() => {
		updateTimer();
		timerId = setInterval(updateTimer, 1000);

		return () => {
			clearInterval(timerId);
		};
	});
</script>

<section class="counter">
	<div class="counter__wrapper">
		<div class="counter__timer">
			{#each timer as item (item.value + item.id)}
				<div class={['counter__timer-item', `counter__timer-item--${item.id}`].join(' ')}>
					<div class="counter__timer-text">
						<span in:fade>{item.value}</span>
						{item.label}
					</div>
				</div>
			{/each}
		</div>

		<div class="counter__photo">
			<img class="counter__photo-image" src={Photo} alt="фото" />
			<img class="counter__photo-tape counter__photo-tape--left" src={Tape1} alt="скотч" />
			<img class="counter__photo-tape counter__photo-tape--right" src={Tape2} alt="скотч" />
		</div>
	</div>

	<img class="counter__flowers counter__flowers--left" src={FlowerLeft} alt="цветы" />
	<img class="counter__flowers counter__flowers--right" src={FlowerRight} alt="цветы" />
</section>

<style lang="scss">
	.counter {
		padding: 30px;
		margin: 0 auto;
		font-size: 1.5rem;
		width: 100%;
		height: 100%;
		min-height: 400px;
		overflow: hidden;

		text-align: center;
		background-color: $main;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		position: relative;

		@include tablet {
			font-size: 1.2rem;
		}

		&__wrapper {
			display: flex;
			gap: 20px;
			justify-content: center;
			align-items: center;

			@include tablet {
				flex-direction: column;
			}
		}

		&__photo {
			position: relative;
			max-width: 50%;

			&__image {
				width: auto;
				height: 300px;
			}

			&-tape {
				position: absolute;
				height: 7vw;
				width: auto;
				z-index: 3;

				@include mobile {
					height: 50px;
				}

				&--left {
					height: 7vw;
					top: -2%;
					left: -7%;
					transform: rotate(-45deg);
				}

				&--right {
					bottom: -5%;
					right: -2%;
					transform: rotate(15deg);
				}
			}
		}

		&__timer {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 30px;
			@include mobile {
				gap: 15px;
			}

			&-item {
				display: flex;
				flex-direction: column;

				background-image: url('/images/counter-note.png');
				background-repeat: no-repeat;
				background-size: auto 100%;
				background-position: center;

				&--s {
					transform: rotate(-5deg) translate(0, -10px);
				}
				&--d {
					transform: rotate(-3deg);
				}
				&--h {
					transform: rotate(3deg) translate(-10px);
				}
				&--m {
					transform: rotate(1deg) translate(10px, -5px);
				}
			}

			&-text {
				display: flex;
				flex-direction: column;
				transform: translate(-3%, -5%);
				padding: 40px;
				min-width: 200px;
				@include mobile {
					min-width: 150px;
					padding: 20px;
				}
				span {
					font-size: 2em;
					font-weight: 700;
				}
			}
		}

		&__flowers {
			position: absolute;
			width: 120px;
			z-index: 5;

			&--left {
				bottom: 0px;
				left: 0;
			}

			&--right {
				bottom: 0px;
				right: 0px;
			}
		}
	}
</style>
