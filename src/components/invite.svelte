<script lang="ts">
	import { onMount } from 'svelte';

	let title = 'Дорогие мама и папа!';
	onMount(async function () {});
</script>

<section class="invite">
	<h2 class="invite__title">{title}</h2>
	<div class="invite__text">
		<p>
			Мы рады сообщить Вам о том, что 23.08.23 состоится торжественный праздник, посвященный нашему
			бракосочетанию.

			<span>
				Мы от всего сердца просим Вас провести этот незабываемый в нашей жизни день вместе с нами.
			</span>
		</p>
	</div>
</section>

<style lang="scss">
	.invite {
		padding: 30px;
		margin: 0 auto;
		font-size: 1.5rem;

		text-align: center;
		background-color: $secondary;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		word-wrap: break-word;

		@include mobile {
			padding: 30px 0;
		}

		&__text {
			font-size: 1.2rem;
			font-weight: bold;

			margin-top: 20px;
			background-image: url('src/assets/images/invite-bg.png');
			background-repeat: no-repeat;
			background-size: auto 100%;
			background-position: center;

			height: 550px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@include tablet {
				height: 80vw;
				font-size: 1rem;
			}

			p {
				display: flex;
				flex-direction: column;

				width: 300px;
				gap: 10px;
			}
		}
	}
</style>
