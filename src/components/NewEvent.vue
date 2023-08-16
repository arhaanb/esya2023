<template>
	<div class="bg">
		<!-- <img src="/speakers/bruh.svg" alt="" /> -->
		<a :href="link" target="_blank">
			<h1 class="bold name">{{ data?.event || null }}</h1>
			<span class="pill zero">
				{{ data?.category }}
			</span>
		</a>
		<div class="flex">
			<img
				:src="
					data?.image
						? `events${data?.image}`
						: 'https://arhaanb.com/new_me.jpeg'
				"
				alt=""
			/>
			<div
				style="
					display: flex;
					justify-content: space-between;
					flex-direction: column;
				"
			>
				<div class="info">
					<!-- <h5 class="akira zero main">main speaker</h5> -->
					<h6 class="zero">Cash Prize</h6>
					<h3 class="zero akira prizenum">
						₹{{
							data?.prize ? parseInt(data?.prize).toLocaleString('en-IN') : 0
						}}
					</h3>
				</div>
				<div>
					<h5 class="zero subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						explicabo nostrum eum maxime?
					</h5>
				</div>
			</div>
		</div>

		<div class="regcont">
			<div class="venue">
				<h6 class="zero">
					<span class="bold">24th August</span>, &nbsp;C-102, LHC
				</h6>
				<h6 class="zero">{{ data?.venue }}</h6>
			</div>
			<a
				:href="data?.link ? data?.link : '/events'"
				target="_blank"
				class="zero"
			>
				<button class="zero reg">Register &rarr;</button>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['data']
}
</script>

<style lang="scss" scoped>
.regcont {
	display: flex;
	justify-content: space-between;
	margin-top: 2em;
	align-items: flex-end;
	.reg {
		background-color: #fff;
		border: none;
		font-family: 'Akira Expanded';
		color: #000;
		font-size: 1em;
		transition: 0.2s;

		&:hover {
			opacity: 0.5;
		}
	}
}
.pill {
	background-color: #000;
	border-radius: 100em;
	padding: 0.25em 0.75em;
}
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
	font-size: 2.5em;
	margin-bottom: 0.25em;
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
		width: 50%;
		aspect-ratio: 800.55/374.69;
		object-fit: cover;
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
	.regcont {
		flex-direction: column;
		gap: 1em;
		margin-top: 1em;
		align-items: flex-start;
	}

	.flex {
		flex-direction: column;
		img {
			width: 100%;
		}
	}
	.prizenum {
		margin-bottom: 0.5em;
	}
}
</style>
