<template>
	<main>
		<br /><br />
		<div class="navcont">
			<div class="navcontFooter">
				<div class="colOne">
					<div class="flexcol">
						<div class="iiitdLogoFooter">
							<img
								src="/footer/iiitdLogoFooter.png"
								class="iiitdLogoFooterImg"
								alt="not loaded"
							/>
						</div>
						<!-- <h3 style="display: inline">|</h3> -->
						<h4>Indraprastha Institute of Information Technology, Delhi</h4>
					</div>
					<h5>
						Okhla Industrial Area Phase 3, Near Govindpuri Metro Station
						<br />New Delhi, Delhi, 110020
					</h5>
				</div>
				<div class="colTwo">
					<div class="contactDetail">
						<img
							src="/footer/fill_phone.png"
							class="mobileFilled"
							alt="not loaded"
						/>
						<div>
							<h6 class="bold zero">Phone</h6>
							<p class="zero">+91-8076572633</p>
							<p class="zero">+91-88001 10450</p>
						</div>
					</div>

					<div class="contactDetail">
						<img
							src="/footer/mailIcon.png"
							class="mailFilled"
							alt="not loaded"
						/>
						<div>
							<h6 class="bold zero">Mail</h6>
							<p class="zero">esya@iiitd.ac.in</p>
						</div>
					</div>
				</div>
			</div>

			<div class="line">
				<h6 class="">
					Made with ❤ by
					<a href="ieee.iiitd.edu.in">IEEE-IIIT Delhi</a> Team for Esya'23.
				</h6>
				<h6 class="zero">
					Built by <a href="https://arhaanb.com" target="_blank">Arhaan Bahadur</a>
					<br />
					Designed by
					<a href="https://www.linkedin.com/in/omansh-arora/" target="_blank"
						>Omansh Arora</a
					>
				</h6>
			</div>
			<br /><br />
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	background-color: #000;
	color: #fff;
}
h5 {
	font-size: 1em;
}

h6 {
	color: #808080;
	a {
		color: rgb(255, 255, 255);
		transition: 0.2s;
	}
	a:hover {
		opacity: 0.5 !important;
	}
}

.flexcol {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	h4 {
		font-size: 1.4em;
		margin: 0;
	}
}

div.contactDetail {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 1.5em;
}

.navcontFooter {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.colOne {
	display: inline-block;
}
.colTwo {
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	gap: 2.5em;
}

.mobileFilled {
	display: inline-block;
	width: 1.625rem;
	height: 2.685rem;
	transform: translateY(0.5rem);
	margin-right: 1rem;
}
.mailFilled {
	display: inline-block;
	width: 1.625rem;
	height: 1.685rem;
	transform: translateY(0.5rem);
	margin-right: 1rem;
}

@media (max-width: 750px) {
	.bottom {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.contact {
		p {
			margin-bottom: 0.5em;
		}
	}
	.navcontFooter {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.colTwo {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column;
		gap: 0em;
		margin-top: 1em;
		margin-bottom: -1em;
	}
}
.iiitdLogoFooter {
	width: 5.75rem;
}

.line {
	width: 100%;
	background-color: #000;
	margin-bottom: 2.5em;
	margin-top: 1em;
	h6:first-child {
		margin-bottom: 0.5em;
	}
}

input[type='text'] {
	width: 80%;
	border: none;
	border-radius: 0;
	border-bottom: solid 2px #00000067;
	padding-left: 0;
	margin-bottom: 2em;
}

input[type='text']:focus {
	border: none;
	border-bottom: solid 2px #000;
}
</style>
