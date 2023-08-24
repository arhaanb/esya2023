<template>
	<main class="navcont">
		<h1 class="center akira titled">Sponsors</h1>
		<!-- add a section for title sponors with a bigger grid-->
		<h2 class="center akira heading">Co-Presented by</h2>
		<div class="twologogrid">
			<div
				class="imgcontain"
				v-for="im in presented_imgs"
				style="display: flex; justify-content: center; align-items: center"
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
				style="display: flex; justify-content: center; align-items: center"
				:key="im"
			>
				<img :src="`/sponsors/${im}`" alt="" />
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
				'igl.png',
				'arista.png',
				'bhartiya_urban.jpg',
				'ideal.png',
				'nodwin.jpeg',
				'boompanda.jpg',
				'candes.png',
				'crac.png',
				'azuredev.jpeg',
				'azure.jpeg',
				'reskill.jpeg',
				'delhicardio.png',
				'enord.jpeg',
				'eraayastays.png',
				'ihub.png',
				'kyariyaan.png',
				'lid.png',
				'pnb.png',
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
	background-color: #fff;
	border-radius: 1em;
	padding: 0.5em;
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
	font-size: 2em;
	margin-bottom: 0.5em;
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
