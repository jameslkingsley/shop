const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

require('laravel-mix-purgecss')

mix.js('resources/js/bootstrap.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .purgeCss({ extractorPattern: /[a-zA-Z0-9-:_/!]+/g })
    .extract()
    .version()
    .options({
        processCssUrls: false,
        postCss: [tailwindcss()],
    })
