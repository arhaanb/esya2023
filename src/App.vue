<template>
	<main class="wrapper">
		<nav v-if="$route.meta.title !== 'notfound'" class="noselect navbar">
			<div class="navcont">
				<!-- <router-link to="/">Collections</router-link>
					<router-link to="/">New in</router-link> -->
				<router-link class="logoesya zero" to="/">
					<img src="/esya-nav-logo.svg" alt="" />
				</router-link>
				<!-- <img src="/iiit-nav-logo.svg" alt=""> -->

				<div class="flex-center mainlogo relative">
					<router-link class="logocont" to="/">
						<img @click="nav = !nav" src="/logo.svg" class="logo" alt="" />
					</router-link>
				</div>

				<div class="links right">
					<img src="/boxes.svg" alt="" />
					<!-- <router-link to="/">Sustainability</router-link>
					<router-link to="/">Journal</router-link>
					<router-link to="/">Account</router-link> -->
				</div>

				<!-- <div class="ham" @click="nav = !nav">
					<img src="@/assets/img/ham.svg" alt="Open navbar" />
				</div> -->
			</div>
		</nav>

		<transition class="noselect nav" name="nav">
			<div v-if="nav" class="fullnav">
				<img src="/logos.png" class="govtlogos" alt="" />
				<div class="navcont">
					<br />
					<div class="topsec">
						<div @click="nav = !nav" style="cursor: pointer" class="logoesya">
							<img src="/esya-nav-logo.svg" alt="" />
						</div>

						<div class="ham" @click="nav = !nav">
							<img src="@/assets/img/close.svg" alt="Close navbar" />
						</div>
					</div>
				</div>

				<!-- <div class="navcont"> -->
				<div class="navdata">
					<div class="flexer">
						<router-link to="/" @click="nav = !nav">Home</router-link>
						<router-link to="/events" @click="nav = !nav">Events</router-link>
						<router-link to="/404" @click="nav = !nav">Schedule</router-link>
						<router-link to="/404" @click="nav = !nav">Gallery</router-link>
						<router-link to="/404" @click="nav = !nav">About</router-link>
					</div>
				</div>
			</div>
		</transition>

		<main>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>

		<div v-if="$route.meta.title !== 'notfound'">
			<!-- <Footer :class="`footer footer-${$route.meta.title}`" /> -->
			<Footer class="footer" />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			nav: false
		}
	},
	watch: {
		nav() {
			document.querySelector('body').style.overflow = this.nav
				? 'hidden'
				: 'auto'
		}
	}
}
</script>

<style lang="scss">
.wrapper {
	overflow-x: hidden;
}
@import 'vue3-notion/dist/style.css'; /* optional Notion-like styles */
.links.right {
	img {
		width: 12em;
	}
}

.logoesya img {
	width: 15em;
}

.fullnavlogo {
	width: 3.5em;
	position: absolute;
	bottom: 0;
}

.navbar .navcont,
.navcont .topsec {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.logocont {
	position: absolute;
}

.navcont .topsec {
	margin-top: 0.5em;
}

.navbar .links {
	display: flex;
	gap: 1.5em;
}

.navbar .links a {
	font-size: 1em;
	transition: 0.2s;
	text-transform: uppercase;
}

.navbar .links a:hover {
	color: var(--red-text);
	// color: rgb(60, 124, 233);
}

.navbar {
	padding: 2em 0 0em 0;
	// margin-bottom: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
	transition: opacity 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
	opacity: 0;
}

.ham {
	cursor: pointer;
}

.ham img {
	width: 1.3em;
}

.footer-notfound {
	display: none;
}

.fullnav {
	width: 100%;
	height: 100vh;
	color: #fff;
	background-color: #000;
	position: fixed;
	top: 0;
	z-index: 20;
	overflow: hidden;
	background-image: url('/menubg.png');
	background-size: cover;
	background-position: center;
	.govtlogos {
		width: 30%;
		position: absolute;
		top: 2.5em;
		right: 10em;
	}
	.navdata {
		a {
			text-transform: uppercase;
			font-family: 'Akira Expanded';
			font-size: 3.35em;
			margin: 0;
			border-bottom: solid #fff 1px;
			padding: 0.2em 1.5em;
			transition: 0.2s;
			&:hover {
				font-size: 4.5em;
			}
		}
		a:first-child {
			border-top: solid #fff 1px;
		}
	}
}

.footer:not(.footer-Home) {
	margin-bottom: 0;
}

.navdata {
	.flexer {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 3em;
		height: 72.5vh;
	}
	.btm {
		position: absolute;
		bottom: 5em;
	}
	a {
		font-size: 1.75em;
		margin-bottom: 0.5em;
		span {
			width: 100% !important;
		}
		opacity: 0.7;
	}
	a.router-link-exact-active {
		opacity: 1;
	}
}

.logo {
	width: 8em;
}
.mainlogo {
	position: absolute;
}
.footer-Home {
	margin-top: 1.25em;
}

.footer-Projects {
	margin-bottom: 2em;
	margin-top: -3em;
}

@media (max-width: 750px) {
	.flex-center.mainlogo {
		align-items: flex-end;
	}
	.logo {
		width: 6em;
	}
	.footer-Home {
		margin-top: 1.5em;
	}
	.footer-Home.flexfoot {
		margin-bottom: 4.75em;
	}
	.footer {
		margin-bottom: -4em;
	}
	.navbar .links {
		display: none;
	}
	.ham {
		display: block !important;
	}

	.fullnav {
		.navdata {
			a {
				font-size: 2.25em;
				padding-left: 1em;
			}
		}
	}

	.logoesya img {
		width: 40%;
	}
}

.flexbruh {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flexbruh .back {
	margin-right: 1em;
}

.back {
	font-size: 1em !important;
	margin-top: -0.25em;
}
</style>
