const _ = require('lodash')

module.exports = {
    theme: {
        fontFamily: {
            sans: '"Nunito", sans-serif',
        },

        extend: {
            screens: {
                '2xl': '2200px'
            },

            boxShadow: {
                input: '0 0 0px 3px rgba(66, 153, 225, 0.5)',
            },

            colors: {
                'background': '#f6f9fc',
                'background-lighter': '#fbfcfe',
            },

            width: {
                sidebar: '16rem',
            },

            height: {
                product: '4rem',
                header: '5rem',
            },

            margin: {
                header: '5rem',
            },
        },
    },
    variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
    plugins: [
        function ({ addUtilities, e, config }) {
            _.map(config('theme.width', []), (value, name) => {
                addUtilities({
                    [`.size-${e(name)}`]: { width: value, height: value }
                }, ['responsive', 'hover', 'active'])
            })
        },
    ],
}
