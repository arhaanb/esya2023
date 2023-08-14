<template>
	<main>
		<h1 class="center akira titled">About</h1>
		<img src="/about/iiit.svg" class="iiit" alt="" />
		<br />
		<br />
		<img src="/about/esya.svg" class="esya" alt="" />
	</main>
</template>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(3, 1fr);
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
		grid-template-columns: repeat(1, 1fr);
	}
	.titled {
		font-size: 200%;
		margin-bottom: 1.5em;
	}
}
</style>
