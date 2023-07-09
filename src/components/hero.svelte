<script lang="ts">
	import { onMount } from 'svelte';
	onMount(async function () {});
</script>

<section class="hero">
	<img
		class="hero__image hero__image--left"
		src="/src/assets/images/hero-left.png"
		alt="цветочки"
	/>
	<img
		class="hero__image hero__image--center"
		src="/src/assets/images/wedding.png"
		alt="цветочки"
	/>
	<h1 class="hero__title">Никита и Татьяна</h1>
	<h2 class="hero__date">23 августа 2023</h2>
	<img
		class="hero__image hero__image--right"
		src="/src/assets/images/hero-right.png"
		alt="цветочки"
	/>
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

		height: 440px;

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
