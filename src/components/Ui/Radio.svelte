<script lang="ts">
	export let label: string;
	export let value: any;
	export let options: any[] = [];
</script>

<div class="radio">
	{#if label}
		<h5 class="radio__title">
			{label}
		</h5>
	{/if}

	<div class="radio__wrapper">
		{#each options as option}
			<label class="radio__item">
				<input
					class="radio__input"
					type="radio"
					bind:group={value}
					value={option}
					on:input
					on:change
					{...$$restProps}
				/>
				<span class="radio__label">{option?.label || option}</span>
			</label>
		{/each}
	</div>
</div>

<style lang="scss">
	.radio {
		&__title {
			margin: 0.5em 0;
		}
		&:focus {
			outline: 0;
			border-color: $blue;
			box-shadow: 0 0 0 4px rgba($color: $blue, $alpha: 0.1);
		}

		&__wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		&__input {
			clip: rect(0 0 0 0);
			clip-path: inset(100%);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;

			&:checked + span {
				box-shadow: 0 0 0 0.0625em rgba($blue, $alpha: 0.8);
				background-color: rgba($blue, $alpha: 0.2);
				z-index: 1;
				color: $blue;
			}
		}

		&__label {
			font-size: 1rem;
			display: block;
			cursor: pointer;
			background-color: #fff;
			padding: 0.375em 0.75em;
			position: relative;
			margin-left: 0.0625em;
			box-shadow: 0 0 0 0.0625em rgba($light-border, 1);
			letter-spacing: 0.05em;
			text-align: center;
			transition: background-color 0.5s ease;
		}

		&__item {
			&:first-child {
				.radio__label {
					border-radius: 0.375em 0 0 0.375em;
				}
			}

			&:last-child {
				.radio__label {
					border-radius: 0 0.375em 0.375em 0;
				}
			}
		}
	}
</style>
