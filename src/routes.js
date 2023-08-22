import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Team from './views/Team.vue'
import NotFound from './views/NotFound.vue'
import Schedule from './views/Schedule.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/events', component: Events, meta: { title: 'Events' } },
	{ path: '/team', component: Team, meta: { title: 'Team' } },
	{ path: '/schedule', component: Schedule, meta: { title: 'Schedule' } },

	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
