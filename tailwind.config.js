const _ = require('lodash')

module.exports = {
    theme: {
        extend: {
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

            colors: {
                'background': '#f6f9fc',
                'background-lighter': '#fbfcfe',
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
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus', 'active'],
        boxSizing: ['responsive'],
        clear: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        gap: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridColumnStart: ['responsive'],
        gridRow: ['responsive'],
        gridRowEnd: ['responsive'],
        gridRowStart: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridTemplateRows: ['responsive'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        placeholderColor: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        rotate: ['responsive', 'hover', 'focus'],
        scale: ['responsive', 'hover', 'focus'],
        skew: ['responsive', 'hover', 'focus'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        transitionDuration: ['responsive'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        translate: ['responsive', 'hover', 'focus'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
    },

    plugins: [
        require('@tailwindcss/ui'),

        function ({ addUtilities, e, config }) {
            _.map(config('theme.width', []), (value, name) => {
                addUtilities({
                    [`.size-${e(name)}`]: { width: value, height: value }
                }, ['responsive', 'hover', 'active'])
            })
        },
    ],
}
