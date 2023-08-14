<template>
	<main>
		<h1 class="center akira titled">SPEAKERS</h1>
		<div class="grid">
			<div class="speaker">
				<Single
					name="Arhaan Bahadur"
					designation="Designer"
					time="9:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/yo.jpg"
				/>
			</div>

			<div class="speaker">
				<Single
					name="Name 1"
					designation="Designer"
					time="10:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/new_me.jpeg"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(3, 1fr);
}

.speaker {
	position: relative;
}

.titled {
	margin-bottom: 0.75em;
	font-size: 6em;
}
@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 3em;
		grid-template-columns: repeat(1, 1fr);
	}
	.titled {
		font-size: 200%;
		margin-bottom: 1.5em;
	}
}
</style>
