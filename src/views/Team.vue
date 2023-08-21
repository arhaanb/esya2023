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
						<img :src="i[2]" alt="link not opening">
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
				['Aditya Nangia', 'Convener', '/teams/AdityaNangia.jpg'],
				['Abhik S Basu', 'Convener', '/teams/AbhikSBasu.jpeg'],
				['Devansh Tripathi', 'Design', '/teams/DevanshTripathi.jpg'],
				['Ipsita', 'Design', '/teams/IpsitaR.jpeg'],
				['Aabhas Chaddha', 'Ambience', '/teams/AabhasChaddha.jpg'],
				['Aanchal Gupta', 'Ambience', '/teams/AanchalGupta.jpg'],
				['Hemang Dahiya', 'Operations', '/teams/HemangDahiya.JPG'],
				['Jayan Pahuja', 'Operations', '/teams/JayanPahuja.jpeg'],
				['Divyam Gupta', 'Treasurer', '/teams/DivyamGupta.jpeg'],
				['Nishaant Rastogi', 'Sponsorships', '/teams/NishaantRastogi.jpg'],
				['Arsh Gupta', 'Sponsorships', '/teams/ArshGupta.JPG'],
				['Akshansh Jaiswal', 'PR', '/teams/AkshanshJaiswal.jpeg'],
				['Akshat Saini', 'PR', '/teams/AkshatSaini.jpg'],
				['Mehul Arora', 'Events', '/teams/MehulArora.JPG'],
				['Sohum Sikdar', 'Events', '/teams/MehulArora.JPG'],
				['Kushagra Gupta', 'Events', '/teams/Kushagra.jpeg'],
				['Agamdeep Singh', 'Events', '/teams/AgamdeepSingh.jpeg'],
				['Ayush Prusty', 'Events', '/teams/AyushPrusty.jpg'],
				['Rudraksha Arora', 'Events', '/teams/AyushPrusty.jpg'],
				['Arhaan Bahadur', 'Webmaster', '/teams/ArhaanBahadur.jpeg'],
				['Abhishek','web-developer','/teams/Abhishek.jpg'],
				['Dhruv Jain', 'Web-developer', '/teams/DhruvJain.jpg'],
				['Aditya Dahiya', 'web-developer', '/teams/AdityaDahiya.jpg'],
				
				
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
		height: 28rem;
		object-fit: cover;
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
