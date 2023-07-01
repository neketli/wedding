<script lang="ts">
	import { onMount } from 'svelte';
	const endpoint = 'https://jsonplaceholder.typicode.com/posts';
	let posts: { title: string }[] = [{ title: '123' }];

	onMount(async function () {});
</script>

<section class="hero">
	<h1>Здравствуйте!</h1>
	<h2>Приглашаем вас на свадьбу!</h2>
	<p>Всем привет</p>
	<img src="/src/assets/1.jpg" alt="это мы" srcset="" />
</section>

<style lang="scss">
	.hero {
		padding: 20px 30px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 50px;
		}
	}
</style>
