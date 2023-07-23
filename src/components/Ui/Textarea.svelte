<script lang="ts">
	import { v4 } from 'uuid';
	export let label: string = '';
	export let value: string | number = '';

	let id = v4();
</script>

<div class="textarea-group">
	<textarea {id} on:input bind:value {...$$restProps} class="textarea" required />
	<label class="textarea-label" for={id}>{label}</label>
</div>

<style lang="scss">
	.textarea-group {
		width: 100%;
		position: relative;
		margin-top: 1.2em;
	}

	.textarea {
		resize: none;
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

	.textarea-label {
		font-size: 1rem;
		position: absolute;
		left: 1rem;
		pointer-events: none;
		transform: translateY(0.5rem);
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
