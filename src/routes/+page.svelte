<script lang="ts">
	import { page } from '$app/stores';

	import Colors from '../components/colors.svelte';
	import Confirm from '../components/confirm.svelte';
	import Counter from '../components/counter.svelte';
	import Hero from '../components/hero.svelte';
	import Invite from '../components/invite.svelte';
	import Place from '../components/place.svelte';
	import Rules from '../components/rules.svelte';

	import { guests, type Guest } from '../data/guests';

	const target = decodeURI($page.url.hash).slice(1);
	let guest: Guest = {
		label: 'Дорогой гость!',
		value: '',
		confirmed: false
	};
	if (guests[target]) {
		guest = guests[target];
	}
</script>

<svelte:head>
	<title>Приглашение на свадьбу Никиты и Татьяны</title>
</svelte:head>

<main class="page">
	<Hero />
	<Invite {guest} />
	<Place />
	{#if guest.value}
		<Confirm {guest} />
	{/if}
	<Rules />
	<Colors />
	<Counter />
</main>

<style lang="scss">
</style>
