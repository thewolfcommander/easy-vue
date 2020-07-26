import Addresses from '@/views/orders/Addresses'
import CheckoutHome from '@/views/orders/CheckoutHome'
import OrderSuccess from '@/views/orders/OrderSuccess'


const routes = [
    {
        path: '/addresses/select/',
        name: 'Addresses',
        component: Addresses,
        meta: {
            title: "Select an Address - EasyEats | Order Food Online"
        }
    },
    {
        path: '/checkout/home/',
        name: 'CheckoutHome',
        component: CheckoutHome,
        meta: {
            title: "Checkout Home - EasyEats | Order Food Online"
        }
    },

    {
        path: '/order/success/',
        name: 'OrderSuccess',
        component: OrderSuccess,
        meta: {
            title: "Order Created Successfully - EasyEats | Order Food Online"
        }
    },
]


export default routes