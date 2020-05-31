export default ({ deliveryCutOffTime }) => ({
    editPayment: false,
    editDelivery: false,

    deliveryDateWeekIndex: (() => {
        if (moment().weekday() === 6
            || (moment().weekday() === 5
                && moment().hour() >= deliveryCutOffTime)) {
            return 1
        }

        return 0
    })(),

    placeOrder(component) {
        component.call('placeOrder', Basket.items())
    },

    selectCard(component, cardId) {
        component.set('cardId', cardId)

        this.editPayment = false
    },

    selectAddress(component, addressId) {
        component.set('addressId', addressId)
    },

    nearestDeliveryDate() {
        let date = moment()

        if (date.hour() >= deliveryCutOffTime) {
            return date.add(1, 'day')
        }

        return date
    },

    currentDeliveryWeek() {
        let date = moment().startOf('week').add(this.deliveryDateWeekIndex, 'week')
        let prefix = _.get(['This Week, ', 'Next Week, '], this.deliveryDateWeekIndex, '')
        let format = prefix ? 'Do MMM' : 'Do MMM YYYY'

        return `${prefix} ${date.format(format)}`
    },

    availableDeliveryDates() {
        let date = moment().startOf('week').add(this.deliveryDateWeekIndex, 'week')

        return _.map(_.range(0, 6), i => {
            let day = date.clone().add(i, 'day').hour(moment().hour())

            return _.merge(day, {
                disabled: day.isBefore(moment(), 'day')
                    || (day.isSame(moment(), 'day') && moment().hour() >= deliveryCutOffTime)
            })
        })
    },
})
