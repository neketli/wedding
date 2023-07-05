<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async function () {});
</script>

<section class="hero">
	<h4 class="hero__target">Дорогие Папа и Мама</h4>
	<h3 class="hero__invite">С радостью приглашаем вас на торжественное событие!</h3>
	<h1 class="hero__title">Свадьба</h1>
	<h2 class="hero__names">Никиты и Татьяны</h2>
	<h2 class="hero__date">23 августа в 16:00</h2>
</section>

<style lang="scss">
	.hero {
		padding: 20px 30px;
		margin: 0 auto;
		font-size: 1.5rem;

		text-align: center;
		background-color: $main;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 760px;

		@include tablet {
			height: 100vh;
		}

		&__title,
		&__names,
		&__date {
			font-family: 'Caveat', cursive;
			line-height: 1;
		}

		&__names {
			font-size: 4rem;
		}
	}
</style>
