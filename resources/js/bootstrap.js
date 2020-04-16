window._ = require('lodash')

window.ajax = require('axios')
window.ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'

window.Vue = Vue
window.Vue.config.productionTip = false

import VueRouter from 'vue-router'

window.VueRouter = VueRouter
Vue.use(VueRouter)

import App from './app'

(function () {
    this.CreateApp = function (config) {
        return new App(config)
    }
}.call(window))
