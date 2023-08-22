<template>
	<main class="navcont">
		<h1 class="center akira titled">Sponsors</h1>

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
				'nixi.png',
				'arista.png',
				'bhartiya_urban.jpg',
				'boompanda.jpg',
				'candes.png',
				'crac.png',
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
			]
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
		grid-template-columns: repeat(2, 1fr);
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
