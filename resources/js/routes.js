import Home from './views/Home'
import Orders from './views/Orders'
import Group from './views/Group'
import Category from './views/Category'
import CheckoutComplete from './views/CheckoutComplete'

export default [
    { path: '/', component: Home },
    { path: '/orders', component: Orders },
    { path: '/checkout/completed', component: CheckoutComplete },
    { path: '/group/:group', component: Group },
    { path: '/group/:group/:category', component: Category },
]
