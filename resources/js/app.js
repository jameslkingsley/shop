import router from './router'
import routes from './routes'

import App from './views/App'

export default class {
    constructor(data) {
        this.bus = new Vue()
    }

    $emit(name, data) {
        this.bus.$emit(name, data)
    }

    $on(name, handler) {
        this.bus.$on(name, handler)
    }

    render() {
        this.renderer = new Vue({
            el: '#app',
            render: h => h(App),
            router: router(routes)
        })
    }

    boot() {
        this.render()
    }
}
