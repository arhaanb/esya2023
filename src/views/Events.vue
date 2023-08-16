<template>
	<main>
		<div class="navcont">
			<br />
			<img src="/events.svg" />
			<br /><br />
			<!-- <h1 class="center titled akira">EVENTS</h1> -->
		</div>
		<div class="navcont header">
			<!-- <Event /> -->
			<div class="grid">
				<NewEvent v-for="e in events" :key="e?.event" :data="e" />
			</div>
			<br /><br /><br />
			<!-- <h1 class="titled center akira">Coming Soon.</h1> -->
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			events: [
				{
					category: 'CSE',
					event: 'Procon Jr.',
					link: 'https://unstop.com/p/procon-jr-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728495',
					venue: 'Online + Offline',
					image: '/procon.svg'
				},
				{
					category: 'CSE',
					event: 'ProSort Euler',
					link: 'https://unstop.com/hackathons/procon-euler-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728754',
					venue: 'Online + Offline'
				},
				{
					category: 'CSE',
					event: 'ProTrio',
					link: 'https://unstop.com/p/protrio-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728752',
					venue: 'Online + Offline'
				},
				{
					category: 'CSE',
					event: 'Slash',
					link: 'https://unstop.com/p/slash-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728747',
					venue: 'Online'
				},
				{
					category: 'CSE',
					event: 'Backslash',
					link: 'https://unstop.com/p/backslash-esya23-indraprastha-institute-of-information-technology-iiit-delhi-732972',
					venue: 'Offline'
				},
				{
					category: 'CSE',
					event: 'h4ckc0n',
					link: 'http://hackcon.in/',
					venue: 'Hybrid'
				},
				{
					category: 'CSE',
					event: 'SteelMountain',
					link: 'https://unstop.com/p/steelmountain-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728725',
					venue: 'Offline'
				},
				{
					category: 'CSE',
					event: 'BugSmash',
					venue: 'Online'
				},
				{
					category: 'Math',
					event: 'Perplexicon',
					link: 'https://unstop.com/p/perplexicon-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728751',
					venue: 'Offline'
				},
				{
					category: 'Math',
					event: 'Zero-Prerequisite Tournament',
					link: 'https://unstop.com/competitions/zpt-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728748',
					venue: 'Offline'
				},
				{
					category: 'ECE',
					event: 'NexTech',
					link: 'https://unstop.com/competitions/nextech-esya23-indraprastha-institute-of-information-technology-iiit-delhi-732139',
					venue: 'Offline'
				},
				{
					category: 'ECE',
					event: 'RoboQuest - Fastest Line Follower',
					link: 'https://unstop.com/competitions/roboquest-maze-solver-indraprastha-institute-of-information-technology-iiit-delhi-723732',
					venue: 'Offline'
				},
				{
					category: 'ECE',
					event: 'Steel Smackdown: RoboWars',
					link: 'https://unstop.com/competitions/steel-smackdown-robowars-indraprastha-institute-of-information-technology-iiit-delhi-723532',
					venue: 'Offline'
				},
				{
					category: 'ECE',
					event: 'SkyRush',
					link: 'https://unstop.com/competitions/skyrush-indraprastha-institute-of-information-technology-iiit-delhi-723733',
					venue: 'Offline'
				},
				{
					category: 'ECE',
					event: 'TechnoKick - RoboSoccer',
					link: 'https://unstop.com/competitions/technokick-robosoccer-indraprastha-institute-of-information-technology-iiit-delhi-723765',
					venue: 'Offline'
				},
				{
					category: 'Hackathon',
					event: 'Design 360',
					link: 'https://unstop.com/p/design360-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728766',
					venue: 'Offline'
				},
				{
					category: 'Hackathon',
					event: 'SpaceHack',
					link: 'https://unstop.com/hackathons/spacehack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728723',
					venue: 'Offline'
				},
				{
					category: 'Hackathon',
					event: 'GameJam',
					link: 'https://unstop.com/p/gamejam-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728763',
					venue: 'Offline'
				},
				{
					category: 'Hackathon',
					event: 'HackCOG',
					link: 'https://unstop.com/p/hackcog-esya23-indraprastha-institute-of-information-technology-iiit-delhi-733896',
					venue: 'Offline'
				},
				{
					category: 'Non-Tech',
					event: "Esya's Kings Cup",
					link: 'https://unstop.com/competitions/kings-cup-esya23-indraprastha-institute-of-information-technology-iiit-delhi-724360',
					venue: 'Offline',
					prize: '150000',
					image: '/kings.svg'
				},
				{
					category: 'Non-Tech',
					event: 'HuntIT',
					link: 'https://unstop.com/p/huntit-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728122',
					venue: 'Offline'
				},
				{
					category: 'Non-Tech',
					event: 'Tech Talk',
					link: 'https://unstop.com/competitions/techtalk-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728764',
					venue: 'Offline'
				},
				{
					category: 'Non-Tech',
					event: 'Debatathon - Debate event',
					link: 'https://unstop.com/p/debathon-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728767',
					venue: 'Offline'
				},
				{
					category: 'Non-Tech',
					event: 'Speedcubing',
					link: 'https://unstop.com/competitions/speedcubing-esya23-indraprastha-institute-of-information-technology-iiit-delhi-717493',
					venue: 'Offline'
				},
				{
					category: 'Non-Tech',
					event: 'X-Grid',
					link: 'https://unstop.com/p/x-grid-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728765',
					venue: 'Offline'
				},
				{
					category: 'Quiz',
					event: 'Fin-explicable and Biz-zarre Quiz',
					link: 'https://unstop.com/p/finbiz-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728771',
					venue: 'Offline'
				},
				{
					category: 'Quiz',
					event: 'General Quiz',
					link: 'https://unstop.com/p/general-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728768',
					venue: 'Offline'
				},
				{
					category: 'Quiz',
					event: 'Sci-Biz-Tech Quiz',
					link: 'https://unstop.com/p/scibiztech-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728772',
					venue: 'Offline'
				},
				{
					category: 'Research',
					event: 'Prompt Craft',
					link: 'https://unstop.com/competitions/prompt-wars-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728755',
					venue: 'Offline'
				},
				{
					category: 'Research',
					event: 'QuAck',
					link: 'https://unstop.com/hackathons/quack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728761',
					venue: 'Offline'
				},
				{
					category: 'Research',
					event: 'ML Wars',
					link: 'https://unstop.com/hackathons/ml-wars-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728756',
					venue: 'Online'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.titled {
	margin-bottom: 0.75em;
	font-size: 10vw;
	padding: 2em 0;
}
.header {
	margin-top: 1em;
}

.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 3em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
