window._ = require('lodash')
window.moment = require('moment')

window.ajax = require('axios')
window.ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'

window.Vue = Vue
window.Vue.config.productionTip = false

import VueRouter from 'vue-router'

window.VueRouter = VueRouter
Vue.use(VueRouter)

window.Pusher = require('pusher-js')
import Echo from 'laravel-echo'

window.Echo = new Echo({
    forceTLS: true,
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
})

import App from './app'

(function () {
    this.CreateApp = function (config) {
        return new App(config)
    }
}.call(window))
