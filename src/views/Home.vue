<template>
	<main>
		<section id="top">
			<br />
			<div class="navcont">
				<img src="/hero.svg" alt="" />
			</div>
			<div class="center">
				<div class="row">
					<button class="reg" onclick="window.location='events'">Register For Events &rarr;</button>
					<button class="reg" onclick="window.location='https://forms.gle/9QWWGygjJb5k2eYQ9'">Get your Fest Passes &rarr;</button>
				</div>
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
.center {
    text-align: center;
    margin: 0 auto;
    padding: 1em;
	align-items: center;
}

.row {
    display: flex;
    flex-direction: column;
}

.reg {
    margin: 0.5em auto;
    display: block;
    background-color: #fff;
    border: none;
    font-family: 'Akira Expanded';
    color: #000;
    font-size: 1.2em;
    text-align: center;
    padding: 1em;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.5;
    }
}

.soonalt {
	margin: -3em 0;
}

@media (min-width: 768px) {
    .row {
        flex-direction: row;
        justify-content: center;
    }
    
    .reg {
        width: auto;
        margin: 0.5em;
    }
}

@media (max-width: 768px) {
    .row {
        justify-content: center; /* Center horizontally on mobile */
    }

    .reg {
        font-size: 1em; /* Reduce font size for smaller screens */
        padding: 0.5em; /* Reduce padding for smaller buttons */
    }
}
</style>
