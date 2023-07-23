<script lang="ts">
	import { v4 } from 'uuid';
	export let label: string = '';
	export let checked: boolean = false;
	export let bindGroup: any[] = [];
	export let value: any;

	let id = v4();
	const onChange = ({ target }: any) => {
		const { value, checked } = target;
		if (checked) {
			bindGroup = [...bindGroup, value];
		} else {
			bindGroup = bindGroup.filter((item) => item !== value);
		}
	};
</script>

<div class="checkbox">
	<input
		class="checkbox__input"
		type="checkbox"
		{id}
		bind:checked
		{value}
		{...$$restProps}
		on:change={onChange}
		style="display: none;"
	/>
	<label class="checkbox__label" for={id}>
		<svg viewBox="0 0 20 20">
			<path
				d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
			/>
			<polyline points="1 9 7 14 15 4" />
		</svg>
		<span>
			{label}
		</span>
	</label>
</div>

<style lang="scss">
	.checkbox {
		font-size: 1rem;
		margin: 5px 0;

		&__input:checked + .checkbox__label svg {
			stroke: $blue;

			path {
				stroke-dashoffset: 60;
				transition: all 0.3s linear;
			}

			polyline {
				stroke-dashoffset: 42;
				transition: all 0.2s linear;
				transition-delay: 0.15s;
			}
		}

		&__label {
			cursor: pointer;
			position: relative;
			margin: auto;
			width: 1rem;
			height: 1rem;
			-webkit-tap-highlight-color: transparent;
			transform: translate3d(0, 0, 0);

			&:before {
				content: '';
				position: absolute;
				top: -0.15rem;
				left: -0.3rem;
				width: 1.5rem;
				height: 1.5rem;
				border-radius: 50%;
				background: rgba($blue, 0.1);
				opacity: 0;
				transition: opacity 0.2s ease;
			}

			svg {
				top: 3px;

				width: 1rem;
				height: 1rem;
				position: relative;
				z-index: 1;
				fill: none;
				stroke-linecap: round;
				stroke-linejoin: round;
				stroke: $light-border;
				stroke-width: 1.5;
				transform: translate3d(0, 0, 0);
				transition: all 0.2s ease;

				path {
					stroke-dasharray: 60;
					stroke-dashoffset: 0;
				}
				polyline {
					stroke-dasharray: 22;
					stroke-dashoffset: 66;
				}
			}
			&:hover {
				&:before {
					opacity: 1;
				}
				svg {
					stroke: $blue;
				}
			}
		}
	}
</style>
