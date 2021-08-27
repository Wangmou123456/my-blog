import type { Router } from 'vue-router'

import showAll from './show-all'
import backAll from './back-all'

export default function addRoutes(router: Router) {
  router.addRoute(showAll)
  router.addRoute(backAll)
}
