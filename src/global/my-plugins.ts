import { App } from 'vue'

import mitt from 'mitt'

const emitter = mitt()

export default {
  install(app: App): void {
    app.config.globalProperties.$emitter = emitter
  }
}
