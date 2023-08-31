<template>
	<main class="navcont">
		<h1 class="center akira titled">Sponsors</h1>
		<!-- add a section for title sponors with a bigger grid-->
		<h2 class="center akira heading">Co-Presented by</h2>
		<div class="twologogrid">
			<div
				class="imgcontain notsquare"
				v-for="im in presented_imgs"
				style="
					background-color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
				"
				:key="im"
			>
				<img :src="`/sponsors/${im}`" alt="" />
			</div>
		</div>
		<br />
		<br />
		<h3 class="center akira heading2">Partners</h3>
		<div class="grid">
			<div
				class="imgcontain"
				v-for="im in imgs"
				:style="
					im?.box ? `background-color: ${im.box}` : 'background-color: #fff;'
				"
				:key="im"
			>
				<img :src="`/sponsors/${im?.img || im}`" alt="" />
			</div>
		</div>

		<br /><br />
		<!-- <img src="/about/iiit.svg" class="iiit" alt="" />
		<br />
		<br />
		<img src="/about/esya.svg" class="esya" alt="" /> -->
	</main>
</template>
<script>
export default {
	data() {
		return {
			imgs: [
				{ img: 'igl.png', box: '#367848' },
				{ img: 'arista.png', box: 'black' },
				'bhartiya_urban.jpg',
				'ideal.png',
				{ img: 'nodwin.jpeg', box: 'black' },
				'boompanda.jpg',
				'candes.png',
				'crac.png',
				'azuredev.png',
				'azure.png',
				'reskill.png',
				'delhicardio.png',
				{ img: 'enord.jpeg', box: 'black' },
				{ img: 'eraayastays.png', box: '#72754F' },
				'ihub.png',
				'kyariyaan.png',
				'lid.png',
				'pnb.png',
				{ img: 'streax.png', box: 'black' },
				'royalenfiled.png',
				'shuraa.png',
				'unstop.png',
				'viral_fission.png'
			],
			presented_imgs: ['akati.png', 'nixi.png']
		}
	}
}
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(7, 1fr);
}

.twologogrid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(2, 1fr);
	.imgcontain {
		padding: 2em;
	}
}

.imgcontain {
	border-radius: 1em;
	padding: 0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	&:not(.notsquare) {
		aspect-ratio: 1;
	}
}

.iiit {
	margin-left: -15%;
}

.esya {
	margin-left: 15%;
}

.speaker {
	position: relative;
}

.titled {
	margin-bottom: 0.75em;
	font-size: 6em;
}

.heading {
	font-size: 3em;
	margin-bottom: 0.5em;
}

.heading2 {
	font-size: 3em;
	margin-bottom: 1em;
}

@media (max-width: 750px) {
	.iiit {
		margin-left: 0;
	}

	.esya {
		margin-left: 0;
	}
	main {
		margin-bottom: -3em;
	}
	.grid {
		display: grid;
		grid-gap: 3em;
		grid-template-columns: repeat(3, 1fr);
	}
	main {
		margin: 3em 0 1em 0;
	}
	.titled {
		font-size: 200%;
		margin-bottom: 1.5em;
	}
}
</style>
