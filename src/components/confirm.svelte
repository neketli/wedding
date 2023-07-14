<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Ui/Button.svelte';

	onMount(async function () {});
</script>

<section class="confirm">
	<h2 class="confirm__title">Просим вас подтвердить свое <br /> присутсвие не позднее 1 августа</h2>

	<div class="confirm__actions">
		<Button class="confirm__button" on:click={() => console.log(123)}>
			Я приду

			<img class="confirm__hearts" src="src/assets/images/hearts.png" alt="цветы" />
		</Button>
		<Button>Я не смогу</Button>
	</div>

	<img
		class="confirm__flowers confirm__flowers--left"
		src="src/assets/images/confirm-flower.png"
		alt="цветы"
	/>
	<img
		class="confirm__flowers confirm__flowers--right"
		src="src/assets/images/confirm-flower.png"
		alt="цветы"
	/>
</section>

<style lang="scss">
	.confirm {
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
		}

		&__actions {
			margin-top: 50px;
			padding: 15px;
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 30px;
		}

		&__flowers {
			position: absolute;
			width: 200px;

			@include tablet {
				width: 100px;
			}

			&--left {
				bottom: 0;
				left: 0;
				transform: rotate(0deg);
			}

			&--right {
				top: 10px;
				right: -10px;
				transform: scale(-1, 1) rotate(15deg);
			}
		}

		&__hearts {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			transform: translate(-50%, -50%) rotate(-15deg);
		}
	}
</style>
