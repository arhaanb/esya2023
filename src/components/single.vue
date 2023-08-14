<template>
	<main>
		<div class="bg">
			<!-- <img src="/speakers/bruh.svg" alt="" /> -->
			<div class="info">
				<h1 class="bold zero">{{ name || null }}</h1>
				<h3 class="zero">{{ designation || null }}</h3>
				<div class="image">
					<img :src="image || 'https://arhaanb.com/new_me.jpeg'" alt="" />
					<div>
						<h5 class="bold zero top">{{ time || null }}</h5>
						<h5 class="bold zero btm">{{ location || null }}</h5>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: ['name', 'designation', 'location', 'desc', 'time', 'image']
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
}
.info {
	h1 {
		margin-bottom: 0em;
		font-size: 2em;
	}
	h3 {
		font-size: 1.75em;
	}
	.image {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		img {
			width: 55%;
			border-radius: 15px;
			margin-top: 2em;
		}
		h5 {
			text-transform: uppercase;
			margin-left: 01.5em;
			font-size: 1.25em;
			&.btm {
				margin-top: -0.2em;
			}
		}
	}

	* {
		font-family: 'Manrope';
	}
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
}
</style>
