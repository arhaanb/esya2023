<template>
	<main>
		<h1 class="center akira titled">SPEAKERS</h1>

		<div class="speaker">
			<SingleCustom
				name="Aman Dhattarwal"
				image="https://media.licdn.com/dms/image/C4E03AQFAoY-MSYJsCA/profile-displayphoto-shrink_800_800/0/1600154260690?e=2147483647&v=beta&t=l_BTSPSMWjK-RDRRX0-YsghTD3ij8PFmqxAy6ImL5XM"
			/>
		</div>

		<br /><br /><br />

		<div class="flexgrid">
			<Single
				name="Arhaan Bahadur"
				designation="Designer"
				time="9:00 PM"
				location="C-102, LHC"
				image="https://arhaanb.com/yo.jpg"
			/>

			<Single
				name="Name 1"
				designation="Designer"
				time="10:00 PM"
				location="C-102, LHC"
				image="https://arhaanb.com/new_me.jpeg"
			/>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	margin: 0 4em;
}
.grid {
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(2, 1fr);
}

.speaker {
	position: relative;
}

.flexgrid {
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > main {
		flex: 1;
	}
}

.titled {
	margin-bottom: 0.75em;
	font-size: 6em;
}
@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(1, 1fr);
	}
	.titled {
		font-size: 200%;
		margin-bottom: 1.5em;
	}
}
</style>
