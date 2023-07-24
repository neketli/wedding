<section class="place">
	<h2 class="place__title">Место проведения</h2>
	<div class="place__registry">
		<p>
			Бракосочетание состоится в отделе ЗАГС
			<a
				target="_blank"
				href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230823T130000Z%2F20230823T200000Z&details=%D0%92%2016%3A00%20%D0%97%D0%90%D0%93%D0%A1%20%D0%B0%D0%B4%D1%80%D0%B5%D1%81%3A%201-%D1%8F%20%D0%9C%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2C%2020%2F7%2C%20%D0%9D%D0%B0%D1%85%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83%2C%20344019%0A%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%2017%3A00%20%D0%91%D0%B0%D0%BD%D0%BA%D0%B5%D1%82-%D1%85%D0%BE%D0%BB%D0%BB%20%22%D0%A0%D0%9E%D0%9A%D0%A4%D0%9E%D0%A0%22%20%D0%B0%D0%B4%D1%80%D0%B5%D1%81%3A%20%D1%83%D0%BB.%2040-%D1%8F%20%D0%9B%D0%B8%D0%BD%D0%B8%D1%8F%2C%205%2F64%2C%20%D0%9D%D0%B0%D1%85%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83&location=%D1%83%D0%BB.%2040-%D1%8F%20%D0%9B%D0%B8%D0%BD%D0%B8%D1%8F%2C%205%2F64%2C%20%D0%9D%D0%B0%D1%85%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D1%8B%20%D0%B8%20%D0%A2%D0%B0%D0%BD%D0%B8"
				title="Добавить событие в календрь"
			>
				<span>в 16:00</span>
			</a>
			<a
				target="_blank"
				href="https://yandex.ru/maps/org/otdel_zags_administratsii_proletarskogo_rayona_g_rostov_na_donu/1049234200"
				title="Открыть карту"
				>по адресу: <span>Ростов&#8209;на&#8209;Дону, 1&#8209;я Майская ул., 20</span>
			</a>
		</p>
	</div>

	<div class="place__banquet">
		<p>
			А отметить это событие приглашаем Вас в банкет холл "Рокфор" в 17:00 по адресу:
			<a
				target="_blank"
				href="https://yandex.ru/maps/org/rokfor/155739321934/"
				title="Открыть карту"
				><span>Ростов&#8209;на&#8209;Дону, ул. 40&#8209;я Линия, 5/64</span>
			</a>
		</p>
	</div>

	<img class="place__airplane" src="src/assets/images/message.png" alt="самолетик" />

	<img
		class="place__flowers place__flowers--left place__flowers--top"
		src="src/assets/images/place-flowers.png"
		alt="цветы"
	/>
	<img
		class="place__flowers place__flowers--left place__flowers--bottom"
		src="src/assets/images/place-flowers.png"
		alt="цветы"
	/>
	<img
		class="place__flowers place__flowers--right place__flowers--top"
		src="src/assets/images/place-flowers.png"
		alt="цветы"
	/>
	<img
		class="place__flowers place__flowers--right place__flowers--bottom"
		src="src/assets/images/place-flowers.png"
		alt="цветы"
	/>
</section>

<style lang="scss">
	.place {
		padding: 30px;
		margin: 0 auto;
		font-size: 1.5rem;
		width: 100%;
		height: 100%;

		text-align: center;
		background-color: $main;

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
		}

		&__registry,
		&__banquet {
			z-index: 2;
			font-size: 1.2rem;
			font-weight: bold;

			margin-top: 20px;
			background-repeat: no-repeat;
			background-size: auto 100%;
			background-position: center;

			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@include tablet {
				font-size: 1rem;
			}

			p {
				display: flex;
				flex-direction: column;

				width: 300px;
				gap: 10px;
			}

			a {
				text-decoration: none;
				color: $dark;
				span {
					color: $blue;
				}
			}
		}

		&__registry {
			background-image: url('src/assets/images/place.png');
			height: 350px;
		}

		&__banquet {
			margin-top: 100px;
			width: fit-content;
			border-radius: 10px;
			padding: 15px;
			background-color: $secondary;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
		}

		&__airplane {
			position: absolute;
			width: 350px;
			height: auto;
			top: 45%;
		}

		&__flowers {
			position: absolute;
			width: 200px;

			@include tablet {
				width: 100px;
			}

			&--left {
				left: 10px;
			}

			&--right {
				right: 10px;
			}

			&--top {
				top: 10px;
			}

			&--bottom {
				bottom: 10px;
			}

			&--left.place__flowers--top {
				transform: scale(1, -1);
			}
			&--right.place__flowers--top {
				transform: rotate(180deg);
			}
			&--right.place__flowers--bottom {
				transform: scale(-1, 1);
			}
		}
	}
</style>
