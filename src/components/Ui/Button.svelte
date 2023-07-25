<script lang="ts">
	export let style: string = 'default';
</script>

<button {...$$restProps} class={`button button--${style} ${$$props.class}`} on:mouseenter on:click
	><slot /></button
>

<style lang="scss">
	.button {
		background-color: $main-light;
		border: 1px solid $dark;
		color: $dark;
		border-radius: 8px;

		box-sizing: border-box;
		cursor: pointer;
		font-size: 16px;
		height: 48px;

		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 24px;
		max-width: 100%;
		padding: 0 25px;

		position: relative;
		text-align: center;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		transform-style: preserve-3d;

		@include tablet {
			padding: 0 20px;
		}

		&--default {
			&::after {
				background-color: $dark;
				border-radius: 8px;
				content: '';
				display: block;
				height: 48px;
				left: 0;
				width: 100%;
				position: absolute;
				top: -2px;
				transition: transform 0.2s ease-out;
				transform: translate(8px, 8px) translateZ(-1px);
			}

			&:hover {
				outline: 0;
				&:after {
					transform: translate(-1px, 0) translateZ(-1px);
				}
			}
		}

		&--primary {
			background: $blue;
			box-shadow: $blue 0 10px 20px -10px;
			box-sizing: border-box;
			color: #ffffff;
			cursor: pointer;
			opacity: 1;
			outline: 0 solid transparent;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			width: fit-content;
			word-break: break-word;
			border: 0;
			transition: transform 0.2s ease-out;

			&:hover {
				transform: translate(0, -2px);
			}
		}

		&--danger {
			background: $red;
			box-shadow: $red 0 10px 20px -10px;
			box-sizing: border-box;
			color: #ffffff;
			cursor: pointer;
			opacity: 1;
			outline: 0 solid transparent;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			width: fit-content;
			word-break: break-word;
			border: 0;
			transition: transform 0.2s ease-out;

			&:hover {
				transform: translate(0, -2px);
			}
		}
	}
</style>
