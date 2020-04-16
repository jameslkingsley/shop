window.Pusher = require('pusher-js')

import Echo from 'laravel-echo'

(function () {
    this.Echo = new Echo({
        forceTLS: true,
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    })
}.call(window))
