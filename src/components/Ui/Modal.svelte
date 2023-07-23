<script lang="ts">
	import { onMount } from 'svelte';

	export let showModal: Boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();

	const closeModal = () => {
		dialog.close();
	};
	const onEscapeClicked = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};
	onMount(() => {
		document.addEventListener('keydown', onEscapeClicked);

		return () => document.removeEventListener('keydown', onEscapeClicked);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={closeModal}
	class="modal"
>
	<button class="modal__close" on:click={closeModal}>
		<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512"
			><path
				d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
			/>
		</svg>
	</button>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal__content" on:click|stopPropagation>
		<div class="modal__header">
			<slot name="header" />
		</div>
		<slot />
		<div class="modal__footer">
			<slot name="footer" />
		</div>
	</div>
</dialog>

<style lang="scss">
	.modal {
		&__close {
			display: flex;
			position: absolute;
			right: 10px;
			top: 10px;
			border: 0;
			background: none;
			cursor: pointer;

			svg {
				transition: all 0.2s ease;
			}

			&:hover {
				svg {
					fill: $blue;
				}
			}
		}
	}
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 20px 25px;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
