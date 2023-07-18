<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async function () {});
</script>

<section class="rules">
	<h2 class="rules__title">Наши пожелания</h2>
	<div class="rules__text">
		<p>Будем признательны, если вы не будете кричать «горько» во время наших поцелуев</p>
		<img class="rules__delimiter" src="src/assets/images/rules-delimiter.png" alt="-" />
		<p>
			Просим вас не дарить нам цветы - сразу после свадьбы мы уезжаем в свадебное путешествие, не
			успеем насладится их красотой
		</p>
		<img class="rules__delimiter" src="src/assets/images/rules-delimiter.png" alt="-" />
		<p>Свои тёплые слова и пожелания приносите в сердцах, а подарки - в конверте</p>
		<img class="rules__logo" src="src/assets/images/rules-logo.png" alt="-" />
	</div>

	<img class="rules__letter" src="src/assets/images/rules-letter.png" alt="фон" />

	<img
		class="rules__flowers rules__flowers--left"
		src="src/assets/images/rules-flower.png"
		alt="цветы"
	/>
	<img
		class="rules__flowers rules__flowers--right"
		src="src/assets/images/rules-flower-2.png"
		alt="цветы"
	/>
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
