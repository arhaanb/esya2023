<template>
	<main>
		<section id="top">
			<br />
			<div class="navcont">
				<img src="/hero.svg" alt="" />
			</div>
			<div class="center">
				<button class="zero reg" onclick="window.location='events'">Register For Events &rarr;</button>
			</div>
		</section>

		<br />
		<img src="/soon.svg" alt="" />

		<div id="speakers" class="navcont">
			<Speakers />
		</div>
		<br /><br />
		<img class="soonalt" src="/soon-alt.svg" alt="" />
		<br /><br />
		<Sponsors />
		<img src="/soon.svg" alt="" />
		<br /><br />
		<br /><br />
		<section id="about">
			<About />
		</section>
		<br /><br />
		<br /><br />
	</main>
</template>

<style lang="scss" scoped>
.test {
	margin-top: 2em;
}

.zero {
	margin: 0 auto;
	display: block;
}

.reg {
	display: flex;
	justify-content: space-between;
	margin-top: 2em;
	align-items: flex-end;
	background-color: #fff;
	border: none;
	font-family: 'Akira Expanded';
	color: #000;
	font-size: 1.5em;
	transition: 0.2s;

	&:hover {
		opacity: 0.5;
	}
}

.soonalt {
	margin: -3em 0;
}
</style>
