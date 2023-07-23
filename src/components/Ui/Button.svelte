<script lang="ts">
</script>

<button {...$$restProps} class={`button ${$$props.class}`} on:mouseenter on:click><slot /></button>

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

		@media (min-width: 768px) {
			padding: 0 40px;
		}

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
</style>
