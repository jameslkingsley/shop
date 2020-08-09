export default () => ({
    open: false,

    select(event, el) {
        let value = event.target.getAttribute('value')
            || event.target.innerText

        el.dispatchEvent(
            new CustomEvent('input', {
                detail: value, bubbles: true,
            }),
        )

        this.open = false
    },
})
