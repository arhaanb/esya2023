<template>
	<main>
		<br /><br />
		<div class="navcont">
			<div class="navcontFooter">
				<div class="colOne">
					<div class="contactDetail">
						<div class="iiitdLogoFooter">
							<img
								src="/iiitdLogoFooter.png"
								class="iiitdLogoFooterImg"
								alt="not loaded"
							/>
						</div>
						<h3 style="display: inline">|</h3>
						<h5 style="display: inline; font-weight: bold">
							INDRAPRASTHA INSTITUTE OF INFORMATION TECHNOLOGY, DELHI
						</h5>
						<h5>
							Okhla Industrial Area Phase 3, Near Govindpuri Metro Station
							<br />New Delhi, Delhi, 110020
						</h5>
					</div>
				</div>
				<div class="colTwo">
					<span class="contactDetail">
						<img
							src="/fonts/fill_phone.png"
							class="mobileFilled"
							alt="not loaded"
						/>
						<span>
							<h6 style="display: inline; font-weight: bold">
								&nbsp; &nbsp; Phone&nbsp;&nbsp;&nbsp;
							</h6>
							<p style="display: inline">
								+91-011-71985300, <br />+91-011-26907400-7404
							</p>
						</span>
					</span>
					<span class="contactDetail">
						<img
							src="/fonts/mailIcon.png"
							class="mailFilled"
							alt="not loaded"
						/>
						<span>
							<h6 style="display: inline; font-weight: bold">
								&nbsp; &nbsp; Mail&nbsp;&nbsp;&nbsp;
							</h6>
							<p style="display: inline">info@iiitd.ac.in</p>
						</span>
					</span>
					<span class="">
						<img
							src="/fonts/phoneIcon.png"
							class="mobileFilled"
							alt="not loaded"
						/>
						<span>
							<h6 style="display: inline; font-weight: bold">
								&nbsp; &nbsp; Fax&nbsp;&nbsp;&nbsp;
							</h6>
							<p style="display: inline">+91-11-26907405</p>
						</span>
					</span>
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
.bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5em;
	font-family: 'manrope', sans-serif;
	h4 {
		font-size: 1.35em;
		margin: 0;
	}
	.flexer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
		.bop {
			width: 0.3em;
		}
	}
}
.navcontFooter {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding-bottom: 1rem;
}

.colOne {
	display: inline-block;
}
.colTwo {
	display: flex;
	flex-direction: column;
	margin-left: 8rem;
}
.colTwo h6 {
	margin-right: 2rem;
}
.contactDetail {
	margin-bottom: 1rem;
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
	h6.bold {
		margin-top: 1em;
	}
	.navcontFooter {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.colTwo{
		margin-left:0;
	}
}
.iiitdLogoFooter {
	display: inline-block;
	width: 5.75rem;
	height: 3.065rem;
	transform: translateY(0.5rem);
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
