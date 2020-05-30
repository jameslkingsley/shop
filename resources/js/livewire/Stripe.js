export default ({ apiKey, intent }) => ({
    name: null,
    card: null,
    error: null,
    stripe: null,
    processing: false,

    setup() {
        this.stripe = Stripe(apiKey)
        let elements = this.stripe.elements()

        let style = {
            base: {
                color: '#161e2e',
                fontFamily: '"Inter", sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '14px',
                '::placeholder': {
                    color: '#9fa6b2',
                },
            },

            invalid: {
                color: '#e53e3e',
                iconColor: '#e53e3e',
            },
        }

        this.card = elements.create('card', { style })

        this.card.mount(this.$refs.card)

        this.card.on('change', event => {
            this.error = event.error ? event.error.message : null
        })
    },

    async submit(component) {
        this.processing = true

        const result = await this.stripe.confirmCardSetup(intent.client_secret, {
            payment_method: {
                card: this.card,
                billing_details: { name: this.name },
            },
        })

        if (result.error) {
            this.processing = false
            return this.error = result.error.message
        }

        component.call('store', this.name, result.setupIntent.payment_method)

        this.processing = false
    },
})
