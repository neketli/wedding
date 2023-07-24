<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	let isInView: boolean;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

	const observerOptions: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};
</script>

<section use:inview={observerOptions} on:inview_change={handleChange} class="hero">
	{#if isInView}
		<img
			transition:fade={{ delay: 300 }}
			class="hero__image hero__image--left"
			src="/images/hero-left.png"
			alt="цветочки"
		/>
		<img
			transition:fade={{}}
			class="hero__image hero__image--center"
			src="/images/wedding.png"
			alt="цветочки"
		/>
		<h1 transition:fade class="hero__title">Никита и Татьяна</h1>
		<h2 transition:fade class="hero__date" title="Да, это среда">23 августа 2023</h2>
		<div transition:fly={{ y: 50, opacity: 0 }} class="hero__rings">
			<img class="hero__rings-image" src="/images/rings.svg" alt="кольца" />
			<div class="hero__rings-shadow" />
		</div>
		<img
			transition:fade={{ delay: 600 }}
			class="hero__image hero__image--right"
			src="/images/hero-right.png"
			alt="цветочки"
		/>
	{/if}
</section>

<style lang="scss">
	.hero {
		padding: 20px 30px;
		margin: 0 auto;
		font-size: 1.5rem;

		text-align: center;
		background-color: $main;

		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		height: 540px;

		&__title {
			font-size: 3em;
			z-index: 5;

			@include mobile {
				font-size: 2em;
			}
		}
		&__date {
			font-size: 1.5em;
			z-index: 5;

			@include mobile {
				font-size: 1em;
			}
		}

		&__rings {
			position: absolute;
			bottom: -80px;
			width: 400px;

			&-image {
				animation: rings 5s ease-in-out infinite;
				transform-origin: 50% 50%;
				@keyframes rings {
					0% {
						transform: translateY(3%) rotate(0);
					}
					50% {
						transform: translateY(-3%) rotate(2deg);
					}
					100% {
						transform: translateY(3%) rotate(0);
					}
				}
			}

			&-shadow {
				position: absolute;
				left: 35%;
				bottom: 30%;
				width: 80px;
				height: 3px;
				border-radius: 50%;
				background-color: rgba(125, 130, 118, 0.1);
				box-shadow: 4px 4px 8px 8px rgba(125, 130, 118, 0.1);

				animation: shadow 5s ease-in-out infinite;
				@keyframes shadow {
					0% {
						transform: scale(1.5);
					}
					50% {
						transform: scale(1);
					}
					100% {
						transform: scale(1.5);
					}
				}
			}
		}

		&__image {
			position: absolute;
			top: 0;
			width: 300px;
			height: auto;

			&--left {
				left: 0;
				transform: translate(-30px, -20px);
			}

			&--center {
				left: 50%;
				top: -10%;
				transform: translate(-50%);
				z-index: 2;
			}

			&--right {
				right: 0;
				bottom: 5%;
				width: 200px;
				top: auto;
			}

			@include tablet {
				width: 200px;

				&--left {
					left: 0;
					transform: translate(-30px, -20px);
				}

				&--center {
					width: 220px;
					left: 50%;
					top: -2%;
					transform: translate(-50%);
				}

				&--right {
					bottom: 0%;
					width: 120px;
				}
			}
		}
	}
</style>
