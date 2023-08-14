<template>
	<main>
		<div class="grid">
			<div class="speaker">
				<Single
					name="h4ckc0n CTF"
					time="9:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/yo.jpg"
				/>
			</div>

			<div class="speaker">
				<Single
					name="Event Name"
					time="10:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/new_me.jpeg"
				/>
			</div>

			<div class="speaker">
				<Single
					name="Event Name"
					time="9:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/yo.jpg"
				/>
			</div>

			<div class="speaker">
				<Single
					name="Event Name"
					time="10:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/new_me.jpeg"
				/>
			</div>
		</div>
		<br /><br />
		<br /><br />
		<br /><br />
		<br /><br />

	</main>
</template>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(2, 1fr);
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
