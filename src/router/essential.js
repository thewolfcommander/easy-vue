import Home from '../views/index.vue'
import Cart from '@/views/essentials/Cart'
import About from '@/views/essentials/About'
import Contact from '@/views/essentials/Contact'
import JoinAsDeliveryBoy from '@/views/essentials/JoinAsDeliveryBoy'
import JoinAsVendor from '@/views/essentials/JoinAsVendor'
import PartnerRelations from '@/views/essentials/PartnerRelations'
import PrivacyPolicy from '@/views/essentials/PrivacyPolicy'
import Report from '@/views/essentials/Report'
import TermsOfService from '@/views/essentials/TermsOfService'
import Wishlist from '@/views/essentials/Wishlist'

const routes = [
    {
        path: '',
        redirect: {name: 'Home'}
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Home - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Home - EasyEats | Order food online'
                }
            ]
        }
    },

    // Essential Routes
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            title: 'Your Cart - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Your Cart - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Your cart - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About Us - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'About Us - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'About Us - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Contact Us - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Contact Us - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Contact Us - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/join-as-delivery-boy',
        name: 'JoinAsDeliveryBoy',
        component: JoinAsDeliveryBoy,
        meta: {
            title: 'Join as Delivery Boy - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Join as Delivery Boy - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Join as Delivery Boy - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/join-as-dendor',
        name: 'JoinAsVendor',
        component: JoinAsVendor,
        meta: {
            title: 'Join as Vendor - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Join as Vendor - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Join as Vendor - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/partner-relations',
        name: 'PartnerRelations',
        component: PartnerRelations,
        meta: {
            title: 'Partner Relations - EasyEats | Order food online',
            metaTags: [{
                    name: 'description',
                    content: 'Partner Relations - EasyEats | Order food online'
                },
                {
                    property: 'og:description',
                    content: 'Partner Relations - EasyEats | Order food online'
                }
            ]
        }
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
            title: 'Privacy Policy - EasyEats | Order food online'
        }
    },
    {
        path: '/report',
        name: 'Report',
        component: Report,
        meta: {
            title: 'Report an Issue here - EasyEats | Order food online'
        }
    },
    {
        path: '/terms-of-service',
        name: 'TermsOfService',
        component: TermsOfService,
        meta: {
            title: 'Terms of Services - EasyEats | Order food online'
        }
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: Wishlist,
        meta: {
            title: 'Your Wishlist - EasyEats | Order food online'
        }
    }
]

export default routes