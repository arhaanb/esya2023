import Home from './views/Home.vue'
import Events from './views/Events.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/events', component: Events, meta: { title: 'Home' } },

	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
