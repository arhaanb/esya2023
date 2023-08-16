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
				name="Mukul Kantiwal"
				designation="Cybersecurity Talks"
				image="https://media.licdn.com/dms/image/C5603AQHB1FPrHCAG1A/profile-displayphoto-shrink_800_800/0/1592075603938?e=1697673600&v=beta&t=CD9TkAu554bzqrzELMocjAYaW_u17ucmHR8-B9zKZ0A"
				link="https://www.linkedin.com/in/mukul-kantiwal/"
			/>

			<Single
				name="Sanchay Singh"
				designation="Cybersecurity Talks"
				image="https://media.licdn.com/dms/image/C5603AQHVm6ZQesnu4A/profile-displayphoto-shrink_800_800/0/1650058406121?e=1697673600&v=beta&t=y1EkgrdbG5bZjOzbqL4RAqbvGrGP0stJ1m4odBCOAso"
				link="https://www.linkedin.com/in/sanchayofficial/"
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
