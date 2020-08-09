const Turbolinks = require('turbolinks')
Turbolinks.start()

import Spruce from './spruce'
import 'alpinejs'
import App from './app'

window.Spruce = Spruce

window._ = require('lodash')
window.moment = require('moment')
window.moment.updateLocale('en', { week: { dow: 1 } })

window.toCurrency = value => {
    let langage = (navigator.language || navigator.browserLanguage).split('-')[0]

    return (value / 100).toLocaleString(langage, { style: 'currency', currency: 'GBP' })
}

// window.Pusher = require('pusher-js')
//
// window.Echo = new Echo({
//     forceTLS: true,
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
// })

(function () {
    this.CreateApp = function (config) {
        return new App(config)
    }
}.call(window))
