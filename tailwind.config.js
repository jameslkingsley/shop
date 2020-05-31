let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    purge: [
        './resources/**/*.vue',
        './resources/**/*.svg',
        './resources/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                background: {
                    lighter: '#fbfcfe',
                    default: '#f6f9fc',
                },
            },

            fontFamily: {
                sans: '"Inter", sans-serif',
            },

            fontSize: {
                '2xs': '0.66rem'
            },

            screens: {
                '2xl': '2200px'
            },

            boxShadow: {
                input: '0 0 0px 3px rgba(66, 153, 225, 0.5)',
            },

            width: {
                sidebar: '16rem',
            },

            minWidth: {
                '1/2': '50%'
            },

            height: {
                product: '4rem',
                header: '5rem',
                26: '6.5rem',
            },

            maxHeight: {
                'order': '90vh'
            },

            margin: {
                header: '5rem',
            },
        },
    },

    variants: {
        ...defaultConfig.variants,
        backgroundColor: [...defaultConfig.variants.backgroundColor, 'active'],
        boxShadow: [...defaultConfig.variants.boxShadow, 'active'],
        opacity: [...defaultConfig.variants.opacity, 'group-hover'],
        textColor: [...defaultConfig.variants.textColor, 'group-hover'],
    },

    plugins: [
        require('@tailwindcss/ui'),

        function ({ addUtilities, e, config }) {
            for (let [name, value] of Object.entries(config('theme.width', {}))) {
                addUtilities({
                    [`.size-${e(name)}`]: { width: value, height: value }
                }, ['responsive', 'hover', 'active'])
            }
        },
    ],
}
