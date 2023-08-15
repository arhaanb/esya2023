import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Team from './views/Team.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/events', component: Events, meta: { title: 'Events' } },
	{ path: '/team', component: Team, meta: { title: 'Team' } },

	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
