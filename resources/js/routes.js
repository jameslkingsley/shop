import Home from './views/Home'
import Portal from './views/Portal'
import Orders from './views/Orders'
import Group from './views/Group'
import Search from './views/Search'
import Category from './views/Category'
import CheckoutComplete from './views/CheckoutComplete'

export default [
    { path: '/', component: Home },
    { path: '/portal', component: Portal },
    { path: '/orders', component: Orders, meta: { admin: true } },
    { path: '/search', component: Search },
    { path: '/checkout/completed', component: CheckoutComplete },
    { path: '/group/:group', component: Group },
    { path: '/group/:group/:category', component: Category },
]
