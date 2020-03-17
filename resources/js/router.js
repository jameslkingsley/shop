import VueRouter from 'vue-router'

export default function (routes) {
    const router = new VueRouter({
        routes, mode: 'history'
    })

    // Hook router events
    return router
}
