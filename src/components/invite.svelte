<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';
	import type { Guest } from '../data/guests';

	let isInView: boolean;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

	const observerOptions: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};
	export let guest: Guest;
</script>

<section use:inview={observerOptions} on:inview_change={handleChange} class="invite">
	{#if isInView}
		<h2 transition:fade class="invite__title">{guest?.label}</h2>
		<div transition:fade class="invite__text">
			<p>
				Мы рады сообщить Вам о том, что 23.08.23 состоится торжественный праздник, посвященный
				нашему бракосочетанию.

				<span>
					Мы от всего сердца просим Вас провести этот незабываемый в нашей жизни день вместе с нами.
				</span>
			</p>
		</div>
	{/if}
</section>

<style lang="scss">
	.invite {
		min-height: 500px;
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
			background-image: url('/images/invite-bg.png');
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
