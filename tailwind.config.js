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
                '2xs': '0.66rem',
            },

            screens: {
                '2xl': '2200px',
            },

            boxShadow: {
                input: '0 0 0px 3px rgba(66, 153, 225, 0.5)',
            },

            width: {
                84: '21rem',
                sidebar: '16rem',
            },

            minWidth: {
                '1/2': '50%',
            },

            height: {
                product: '4rem',
                header: '5rem',
                26: '6.5rem',
            },

            maxHeight: {
                'order': '90vh',
            },

            margin: {
                header: '5rem',
            },

            transitionDuration: {
                '0': '0ms',
            },
        },
    },

    variants: {
        ...defaultConfig.variants,
        backgroundColor: [...defaultConfig.variants.backgroundColor, 'active', 'important', 'even'],
        boxShadow: [...defaultConfig.variants.boxShadow, 'active'],
        opacity: [...defaultConfig.variants.opacity, 'group-hover', 'important'],
        textColor: [...defaultConfig.variants.textColor, 'group-hover', 'important'],
        translate: [...defaultConfig.variants.translate, 'group-hover'],
        scale: [...defaultConfig.variants.scale, 'group-hover'],
        transitionDuration: [...defaultConfig.variants.transitionDuration, 'hover'],
    },

    plugins: [
        require('@tailwindcss/ui'),

        function ({ addUtilities, e, config }) {
            addUtilities({
                '.top-full': { top: '100%' },
                '.bottom-full': { bottom: '100%' },
                '.left-full': { left: '100%' },
                '.right-full': { right: '100%' },
                '.blend-multiply': { 'mix-blend-mode': 'multiply' },
            }, ['responsive'])
        },

        function ({ addUtilities, e, config }) {
            for (let [name, value] of Object.entries(config('theme.width', {}))) {
                addUtilities({
                    [`.size-${e(name)}`]: { width: value, height: value },
                }, ['responsive', 'hover', 'active'])
            }
        },

        function ({ addVariant, e }) {
            addVariant('important', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`
                    rule.walkDecls(decl => {
                        decl.important = true
                    })
                })
            })
        },
    ],
}
