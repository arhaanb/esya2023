<template>
	<main>
		<div class="bg">
			<!-- <img src="/speakers/bruh.svg" alt="" /> -->
			<a :href="link" target="_blank">
				<h1 class="bold zero name">{{ name || null }}</h1>
				<h3 class="zero designation">{{ designation || null }}</h3>
			</a>
			<div class="flex">
				<img :src="image || 'https://arhaanb.com/new_me.jpeg'" alt="" />
				<div
					style="
						display: flex;
						justify-content: space-between;
						flex-direction: column;
					"
				>
					<div class="info">
						<!-- <h5 class="akira zero main">main speaker</h5> -->
						<h5 class="bold zero top">{{ time || null }}</h5>
						<h5 class="bold zero btm">{{ location || null }}</h5>
					</div>
					<div>
						<h5 class="zero subtitle">
							presented by
							<a href="https://www.crac-learning.com/" target="_blank"
								>CRAC Learning</a
							>
							and
							<a href="https://hackersvilla.xyz/" target="_blank"
								>Hackersvilla.xyz</a
							>, in collaboration with
							<a href="https://www.instagram.com/owaspiiitd/" target="_blank"
								>OWASP IIITD</a
							>
							and
							<a href="https://d4rkc0de.iiitd.edu.in/" target="_blank"
								>d4rkc0de</a
							>.
						</h5>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: ['name', 'designation', 'location', 'desc', 'time', 'image', 'link']
}
</script>

<style lang="scss" scoped>
.bg {
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(228, 230, 255, 0.37);
	backdrop-filter: blur(14px);
	-webkit-backdrop-filter: blur(14px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	padding: 2em;
	font-family: 'Manrope' !important;
}
.subtitle {
	font-size: 0.85em;
	color: #cfcfcf;
	a {
		color: #fff;
	}
}

.main {
	font-size: 1.1em;
	opacity: 0.6;
	margin-bottom: 0.2em;
	margin-top: 0.5em;
}

h1 {
	margin-bottom: 0em;
	font-size: 2.5em;
}
h3 {
	font-size: 1.75em;
}
.flex {
	display: flex;
	justify-content: flex-start;
	gap: 1em;
	margin-top: 1.5em;
	// align-items: flex-end;
	img {
		width: 45%;
		border-radius: 15px;
	}
}

.info {
	h5 {
		text-transform: uppercase;
		font-size: 2em;
		&.btm {
			margin-top: -0.2em;
		}
	}
}
// * {
// 	font-family: 'Manrope';
// }
@media (max-width: 750px) {
	h1 {
		font-size: 2em;
	}
	h3 {
		font-size: 1.25em;
	}
	.image {
		img {
			width: 60%;
			margin-top: 2em;
		}
		h5 {
			margin-left: 0.75em;
			font-size: 1.1em;
		}
	}
}
</style>
