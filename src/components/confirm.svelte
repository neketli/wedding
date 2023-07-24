<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Ui/Button.svelte';
	import Checkbox from './Ui/Checkbox.svelte';
	import Input from './Ui/Input.svelte';
	import Modal from './Ui/Modal.svelte';
	import Radio from './Ui/Radio.svelte';
	import Textarea from './Ui/Textarea.svelte';

	import type { Guest } from '../data/guests';

	export let guest: Guest;

	type DefaultObject = {
		label: string;
		value: string;
	};

	let confirmModal = false;
	let declineModal = false;

	let name: string = guest.value;
	let comment: string;

	const options = {
		alcohol: [
			{
				label: 'Вино',
				value: 'вино',
				options: [
					{
						label: 'Игристое',
						value: 'игристое'
					},
					{
						label: 'Красное',
						value: 'красное'
					},
					{
						label: 'Белое',
						value: 'белое'
					}
				]
			},
			{
				label: 'Крепкий алкоголь',
				value: 'крепкое',
				options: [
					{
						label: 'Водка',
						value: 'водка'
					},
					{
						label: 'Коньяк',
						value: 'коньяк'
					},
					{
						label: 'Виски',
						value: 'виски'
					}
				]
			},
			{
				label: 'Не буду пить',
				value: '-'
			}
		],
		food: [
			{
				label: 'Мясо',
				value: 'мясо'
			},
			{
				label: 'Рыба',
				value: 'рыба'
			},
			{
				label: 'Овощи и грибы',
				value: 'овощи'
			}
		]
	};
	let selected: {
		alcohol: {
			label: string;
			value: string;
			options?: DefaultObject[];
		} | null;
		food: {
			label: string;
			value: string;
			options?: DefaultObject[];
		} | null;
	} = {
		alcohol: null,
		food: null
	};

	let list: string[] = [];
	$: if (!confirmModal) list = [];
</script>

<section class="confirm">
	<h2 class="confirm__title">
		Просим вас подтвердить свое <br /> присутствие не позднее 1 августа
	</h2>

	<div class="confirm__actions">
		<Button class="confirm__button" on:click={() => (confirmModal = true)}>
			Я приду
			<img class="confirm__hearts" src="src/assets/images/hearts.png" alt="цветы" />
		</Button>
		<Button on:click={() => (declineModal = true)}>Я не смогу</Button>
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
	{#if confirmModal}
		<Modal bind:showModal={confirmModal}>
			<h2 slot="header">Для нас важно знать</h2>

			<div class="confirm__modal">
				<Input autofocus label="Ваше имя" bind:value={name} />
				<Radio
					label="Ваши предпочтения по алкоголю"
					options={options.alcohol}
					bind:value={selected.alcohol}
					on:change={() => {
						list = [];
					}}
				/>
				{#if selected?.alcohol?.options}
					<div transition:slide class="confirm__items">
						{#each selected?.alcohol?.options as item (item.value)}
							<Checkbox label={item.label} value={item.value} bind:bindGroup={list} />
						{/each}
					</div>
				{/if}

				<Radio label="Чем вас накормить?" options={options.food} bind:value={selected.food} />

				<Textarea label="Что еще нам следует знать?" bind:value={comment} />
				<div class="confirm__modal-buttons">
					<Button
						style="primary"
						on:click={() => {
							console.log(name, selected.alcohol?.value, list, selected.food?.value, comment);
						}}>Подтверждаю</Button
					>
					<Button
						style="danger"
						on:click={() => {
							confirmModal = false;
						}}>Отмена</Button
					>
				</div>
			</div>
		</Modal>
	{/if}
	{#if declineModal}
		<Modal bind:showModal={declineModal}>
			<h2 slot="header">Вы уверены?</h2>

			<div class="confirm__decline">
				<Input autofocus label="Ваше имя" bind:value={name} />

				<Textarea label="Можете написать нам" bind:value={comment} />
				<div class="confirm__decline-buttons">
					<Button on:click={() => {}}>Я не смогу</Button>
					<Button on:click={() => (declineModal = false)}>Отмена</Button>
				</div>
			</div>
		</Modal>
	{/if}
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
			max-width: 70vw;
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
				bottom: -15px;
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

		&__items {
			margin-top: 10px;
			display: flex;
			justify-content: center;
			gap: 20px;
		}

		&__modal {
			margin-top: 10px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			&-buttons {
				width: 100%;
				display: flex;
				justify-content: space-between;
				gap: 20px;
			}
		}

		&__decline {
			margin-top: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			&-buttons {
				width: 100%;
				display: flex;
				justify-content: space-between;
				gap: 20px;
			}
		}
	}
</style>
