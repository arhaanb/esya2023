<template>
	<main class="navcont">
		<div>
			<br /><br />
			<h1 class="center akira zero">the Team</h1>
			<h5 class="center">meet the team.</h5>
			<br /><br />

			<div class="grid">
				<div v-for="i in team" :key="i" class="membercont">
					<div class="member">
						<h4>{{ i[0] }}</h4>
						<h5>{{ i[1] }}</h5>
					</div>
				</div>
			</div>
		</div>
		<br /><br />
		<br /><br />
	</main>
</template>

<script>
export default {
	data() {
		return {
			team: [
				['Aditya Nangia', 'Convener', 'arhaan.jpg'],
				['Abhik S Basu', 'Convener', 'arhaan.jpg'],
				['Devansh Tripathi', 'Design', 'arhaan.jpg'],
				['Ipsita', 'Design', 'arhaan.jpg'],
				['Aabhas Chaddha', 'Ambience', 'arhaan.jpg'],
				['Aanchal Gupta', 'Ambience', 'arhaan.jpg'],
				['Hemang Dahiya', 'Operations', 'arhaan.jpg'],
				['Jayan Pahuja', 'Operations', 'arhaan.jpg'],
				['Divyam Gupta', 'Treasurer', 'arhaan.jpg'],
				['Nishaant Rastogi', 'Sponsorships', 'arhaan.jpg'],
				['Arsh Gupta', 'Sponsorships', 'arhaan.jpg'],
				['Akshansh Jaiswal', 'PR', 'arhaan.jpg'],
				['Akshat Saini', 'PR', 'arhaan.jpg'],
				['Mehul Arora', 'Events', 'arhaan.jpg'],
				['Sohum Sikdar', 'Events', 'arhaan.jpg'],
				['Kushagra Gupta', 'Events', 'arhaan.jpg'],
				['Agamdeep Singh', 'Events', 'arhaan.jpg'],
				['Ayush Prusty', 'Events', 'arhaan.jpg'],
				['Rudraksha Arora', 'Events', 'arhaan.jpg'],
				['Arhaan Bahadur', 'Webmaster', 'arhaan.jpg']
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(3, 1fr);
  margin: auto 20%;
}

@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 2em;
		grid-template-columns: repeat(1, 1fr);
    margin: auto;
	}
}

.member {
	img {
		width: 100%;
		border-radius: 1em;
	}

	h4 {
		margin: 0;
		margin-top: 0.25em;
		font-size: 1.5em;
	}

	h5 {
		margin: 0;
		opacity: 0.7;
		font-size: 1.25em;
	}
}

@media (max-width: 750px) {
	.member {
		width: 70%;
	}

	.membercont {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
