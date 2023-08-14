<template>
	<main>
		<!-- <div class="navcont">
			<div class="row">
				<div class="five columns contact">
					<h1 class="fancy">Join our community</h1>
					<input type="text" name="" placeholder="Email" id="" />
					<p>
						*By checking the above box you are agreeing to receive email
						communications from ESYA Inc. This can be changed at any time.
						Please refer to our Privacy Policy and Terms of Use for more details
						or Contact Us
					</p>
				</div>
				<div class="six columns">
					<div class="row">
						<div class="four columns">
							<h6 class="bold zero">Company</h6>
							<h6 class="zero">About us</h6>
							<h6 class="zero">Shop</h6>
							<h6 class="zero">Blogs</h6>
						</div>
						<div class="four columns">
							<h6 class="bold zero">Products</h6>
							<h6 class="zero">Product Name</h6>
							<h6 class="zero">Product Name</h6>
							<h6 class="zero">Product Name</h6>
							<h6 class="zero">Product Name</h6>
							<h6 class="zero">Product Name</h6>
						</div>
						<div class="four columns">
							<h6 class="bold zero">Customer Care</h6>
							<h6 class="zero">FAQ</h6>
							<h6 class="zero">Return Policy</h6>
							<h6 class="zero">Promotional Terms & Conditions</h6>
						</div>
					</div>
				</div>
				<div class="one columns">
					<h6 class="bold">Socials</h6>
				</div>
			</div>

			<div class="bottom fancy">
				<h4>© ESYA</h4>
				<div class="flexer">
					<h4>Terms & Conditions</h4>
					<img class="bop" src="/img/bop.svg" alt="" />
					<h4>Privacy Policy</h4>
				</div>
			</div>

			<br /><br />
		</div> -->
		<img src="/footer.svg" alt="">
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
