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
							<p class="zero">+91-011-71985300</p>
							<p class="zero">+91-011-26907400-7404</p>
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
							<p class="zero">info@iiitd.ac.in</p>
						</div>
					</div>

					<div class="contactDetail">
						<img
							src="/footer/phoneIcon.png"
							class="mobileFilled"
							alt="not loaded"
						/>
						<div>
							<h6 class="zero bold">Fax</h6>
							<p class="zero">+91-11-26907405</p>
						</div>
					</div>
				</div>
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
	height: 1.5px;
	background-color: #000;
	margin-bottom: 2.5em;
	margin-top: 4em;
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
