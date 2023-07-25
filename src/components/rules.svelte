<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import Delimiter from '$lib/images/rules-delimiter.png';
	import Logo from '$lib/images/rules-logo.png';
	import Letter from '$lib/images/rules-letter.png';
	import FlowersLeft from '$lib/images/rules-flower.png';
	import FlowersRight from '$lib/images/rules-flower-2.png';

	let isInView: boolean;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

	const observerOptions: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};
</script>

<section class="rules">
	<h2 class="rules__title">Наши пожелания</h2>
	<div use:inview={observerOptions} on:inview_change={handleChange} class="rules__text">
		{#if isInView}
			<p transition:fly={{ y: 20, opacity: 0, delay: 100 }}>
				Будем признательны, если вы не будете кричать «горько» во время наших поцелуев
			</p>
			<img
				transition:fly={{ y: 20, opacity: 0, delay: 300 }}
				class="rules__delimiter"
				src={Delimiter}
				alt="-"
			/>
			<p transition:fly={{ y: 20, opacity: 0, delay: 500 }}>
				Просим вас не дарить нам цветы - сразу после свадьбы мы уезжаем в свадебное путешествие, не
				успеем насладится их красотой
			</p>
			<img
				transition:fly={{ y: 20, opacity: 0, delay: 700 }}
				class="rules__delimiter"
				src={Delimiter}
				alt="-"
			/>
			<p transition:fly={{ y: 20, opacity: 0, delay: 900 }}>
				Свои тёплые слова и пожелания приносите в сердцах, а подарки - в конверте
			</p>
			<img
				transition:fly={{ y: 20, opacity: 0, delay: 1000 }}
				class="rules__logo"
				src={Logo}
				alt="-"
			/>
		{/if}
	</div>

	<img class="rules__letter" src={Letter} alt="фон" />

	<img class="rules__flowers rules__flowers--left" src={FlowersLeft} alt="цветы" />
	<img class="rules__flowers rules__flowers--right" src={FlowersRight} alt="цветы" />
</section>

<style lang="scss">
	.rules {
		padding: 30px;
		margin: 0 auto;
		font-size: 1.5rem;
		width: 100%;
		height: 1050px;
		min-height: 400px;
		overflow: hidden;

		text-align: center;
		background-color: $main;

		display: flex;
		flex-direction: column;
		align-items: center;

		position: relative;

		@include tablet {
			padding: 30px 0;
		}

		&__title {
			margin: 30px 0;
		}

		&__title,
		&__text {
			z-index: 2;
		}

		&__text {
			font-size: 1.2rem;

			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			p {
				width: 350px;
				background-color: #f6f8f5;
				@include mobile {
					font-size: 1rem;
					width: 280px;
				}
			}
		}

		&__delimiter {
			margin-top: -50px;
			width: 200px;
		}

		&__logo {
			width: 150px;
		}

		&__letter {
			height: 1000px;
			min-width: 700px;
			position: absolute;
			top: 46%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		&__flowers {
			position: absolute;
			width: 250px;

			@include tablet {
				width: 150px;
			}

			&--left {
				top: 0;
				left: 0;
				transform: rotate(0deg);
			}

			&--right {
				bottom: 0px;
				right: -50px;
			}
		}
	}
</style>
