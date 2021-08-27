import { App } from 'vue'
import elPlus from './element-plus'

import myPlugins from './my-plugins'

export default function global(app: App): void {
  app.use(elPlus)
  app.use(myPlugins)
}
