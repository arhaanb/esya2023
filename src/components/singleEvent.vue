<template>
	<main>
		<div class="bg">
			<!-- <img src="/speakers/bruh.svg" alt="" /> -->
			<div class="info">
				<h1 class="bold zero">{{ name || null }}</h1>
				<div class="image">
					<img :src="image || 'https://arhaanb.com/new_me.jpeg'" alt="" />
					<div class="right">
						<div>
							<p class="description">{{ description || null }}</p>
						</div>
						<div>
							<a class="bold zero top" :href=link>Unstop link</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: ['name', 'image', 'description', 'link']
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
		margin-top: 1em;
		display: flex;
		align-items: flex-start;
		img {
			width: 25em;
			border-radius: 15px;
		}
		a {
			text-decoration: underline;
			margin-left: 01.5em;
			font-size: 1.1em;
			&.btm {
				margin-top: -0.2em;
			}
		}
	}
	.right {
		display:flex;
		height: 100%;
		flex: 1;
		flex-direction: column;

		.description {
			margin-left: 1.5em;
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
