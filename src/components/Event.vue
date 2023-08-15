<template>
	<main>
		<div class="grid">
			<div class="speaker">
				<SingleEvent
					name="h4ckc0n CTF"
					time="9:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/yo.jpg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					link="https://unstop.com/test"
				/>
			</div>

			<div class="speaker">
				<SingleEvent
					name="Event Name edit"
					time="10:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/new_me.jpeg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</div>

			<div class="speaker">
				<SingleEvent
					name="Event Name"
					time="9:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/yo.jpg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</div>

			<div class="speaker">
				<SingleEvent
					name="Event Name"
					time="10:00 PM"
					location="C-102, LHC"
					image="https://arhaanb.com/new_me.jpeg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
