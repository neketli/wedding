<script lang="ts">
	import { v4 } from 'uuid';
	export let type: string = 'text';
	export let label: string = '';
	export let value: string | number = '';
	export let required: boolean = true;

	let id = v4();

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

<div class="input-group">
	<input {id} on:input bind:value use:typeAction {required} {...$$restProps} class="input" />
	<label class="input-label" for={id}>{label}</label>
</div>

<style lang="scss">
	.input-group {
		position: relative;
		margin-top: 1.2em;
		width: 100%;
	}

	.input {
		width: 100%;
		border: solid 1px $light-border;
		border-radius: 1rem;
		background: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);

		&:focus,
		&:valid {
			outline: none;
			border: 1px solid $blue;
		}

		&:focus ~ &-label,
		&:valid ~ &-label {
			transform: translateY(-100%) scale(1.2);
			padding: 0 0.2em;
			color: $blue;
		}
	}

	.input-label {
		font-size: 1rem;
		position: absolute;
		left: 1rem;
		pointer-events: none;
		transform: translateY(0.5rem);
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
