<template>
	<main>
		<div class="navcont">
			<br />
			<h1 class="akira big">SCHEDULE</h1>
			<img src="/schedule/eventschedule.png" alt="" />
			<br /><br />
			<br /><br />
			<br /><br />
			<!-- <h1 class="center titled akira">EVENTS</h1> -->
		</div>
		<!-- <div class="navcont header">
			<div class="grid">
				<NewEvent v-for="e in events" :key="e?.event" :data="e" />
			</div>
			<br /><br /><br />
		</div> -->
	</main>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.big {
	font-size: 7vw !important;
	text-align: center;
}

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
