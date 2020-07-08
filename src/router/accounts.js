import Login from '@/views/accounts/Login'
import Register from '@/views/accounts/Register'

// Accounts
import Orders from '@/views/accounts/myaccount/Orders'
import OrderDetail from '@/views/accounts/myaccount/OrderDetail'
import Profile from '@/views/accounts/myaccount/Profile'

// Delivery Boy
// Accounts
import DBOrders from '@/views/accounts/dbaccount/Orders'
import DBCancelledOrders from '@/views/accounts/dbaccount/CancelledOrders'
import DBCompletedOrders from '@/views/accounts/dbaccount/CompletedOrders'
import DBShippedOrders from '@/views/accounts/dbaccount/ShippedOrders'
import DBOrderDetail from '@/views/accounts/dbaccount/OrderDetail'
import DBProfile from '@/views/accounts/dbaccount/Profile'

const routes = [
    {
        path: '/login/',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login to your account - EasyEats | Order food online',
        },
    },
    {
        path: '/register/',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register Now - EasyEats | Order food online',
        },
    },

    // Accounts
    {
        path: '/account/',
        name: 'Account',
        redirect: {name: 'Profile'},
        meta: {
            title: 'My Profile - EasyEats | Order food online',
            requiresAuth: true
        },
        children: [
            {
                path: '/profile/',
                name: 'Profile',
                component: Profile,
                meta: {
                    title: 'My Profile - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/orders/',
                name: 'Orders',
                component: Orders,
                meta: {
                    title: 'My Orders - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/orders/:orderId/',
                name: 'OrderDetail',
                component: OrderDetail,
                meta: {
                    title: 'My Order Detail - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
        ]
    },

    // Delivery Boy Accounts
    {
        path: '/delivery-boy/account/',
        name: 'DBAccount',
        redirect: {name: 'DBProfile'},
        meta: {
            title: 'My Profile - EasyEats | Order food online',
            requiresAuth: true
        },
        children: [
            {
                path: '/db-profile/',
                name: 'DBProfile',
                component: DBProfile,
                meta: {
                    title: 'My Delivery Boy Profile - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/db-orders/',
                name: 'DBOrders',
                component: DBOrders,
                meta: {
                    title: 'New Orders - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/db-orders/:orderId/',
                name: 'DBOrderDetail',
                component: DBOrderDetail,
                meta: {
                    title: 'Order Detail - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/db-cancelled-orders/',
                name: 'DBCancelledOrders',
                component: DBCancelledOrders,
                meta: {
                    title: 'Cancelled Orders - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/db-completed-orders/',
                name: 'DBCompletedOrders',
                component: DBCompletedOrders,
                meta: {
                    title: 'Completed Orders - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
            {
                path: '/db-shipped-orders/',
                name: 'DBShippedOrders',
                component: DBShippedOrders,
                meta: {
                    title: 'Shipped Orders - EasyEats | Order food online',
                    requiresAuth: true
                },
            },
        ]
    },

]

export default routes