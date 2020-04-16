const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.js('resources/js/bootstrap.js', 'public/js/app.js')
    .js('resources/js/wire.js', 'public/js/wire.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .extract()
    .version()
    .options({
        processCssUrls: false,
        postCss: [tailwindcss()],
    })
