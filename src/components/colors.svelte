<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import Flowers from '$lib/images/confirm-flower.png';

	let isInView: boolean;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

	const observerOptions: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	const colors = [
		{
			label: 'Черный',
			color: '#252b31',
			delay: 200
		},
		{
			label: 'Зеленый',
			color: '#B3CCAE',
			delay: 600
		},
		{
			label: 'Бежевый',
			color: '#E1C9A9',
			delay: 400
		}
	];
</script>

<section use:inview={observerOptions} on:inview_change={handleChange} class="colors">
	<h2 class="colors__title">Нам будет приятно если вы поддержите цветовую гамму нашего события!</h2>

	<div class="colors__list">
		{#each colors as color}
			{#if isInView}
				<div transition:fly={{ opacity: 0, y: -50, delay: color.delay }} class="colors__color">
					<div class="colors__circle" style="background-color: {color.color}" />
					{color.label}
				</div>
			{/if}
		{/each}
	</div>

	<img class="colors__flowers colors__flowers--left" src={Flowers} alt="цветы" />
	<img class="colors__flowers colors__flowers--right" src={Flowers} alt="цветы" />
</section>

<style lang="scss">
	.colors {
		padding: 30px;
		margin: 0 auto;
		font-size: 1.5rem;
		width: 100%;
		height: 100%;
		min-height: 400px;
		overflow: hidden;

		text-align: center;
		background-color: $secondary;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		position: relative;

		@include tablet {
			padding: 30px 0;
		}

		&__title {
			z-index: 2;
			max-width: 60vw;
		}
		&__list {
			margin-top: 40px;
			display: flex;
			gap: 20px;
		}

		&__color {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			font-size: 0.7em;
			transition: all ease-in-out 0.2s;

			&:hover {
				transform: scale(1.2);
			}
		}

		&__circle {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			box-shadow: 1px 3px 2px rgba($color: #000000, $alpha: 0.2);
			border: 1px solid rgba($color: #000000, $alpha: 0.1);
		}

		&__flowers {
			position: absolute;
			width: 200px;

			@include tablet {
				width: 100px;
			}

			&--left {
				bottom: -15px;
				left: 0;
				transform: rotate(0deg);
			}

			&--right {
				top: 10px;
				right: -10px;
				transform: scale(-1, 1) rotate(15deg);
			}
		}
	}
</style>
