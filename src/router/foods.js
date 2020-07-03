import Categories from '@/views/products/food/Categories'
import CategoryDetail from '@/views/products/food/CategoryDetail'
import Menu from '@/views/products/food/Menu'
import RestaurantDetail from '@/views/products/food/RestaurantDetail'
import Restaurants from '@/views/products/food/Restaurants'


const routes = [
    {
        path: '/menu/',
        name: 'Menu',
        component: Menu,
        meta: {
            title: "Delicious Menu Ever - EasyEats | Order Food Online"
        }
    },
    {
        path: '/restaurants/',
        name: 'Restaurants',
        component: Restaurants,
        meta: {
            title: "Best Restaurants - EasyEats | Order Food Online"
        },
    },
    {
        path: '/restaurant/:restaurantId/',
        name: 'RestaurantDetail',
        component: RestaurantDetail,
        meta: {
            title: "Restaurant Detail - EasyEats | Order Food Online"
        }
    },
    {
        path: '/food-categories/',
        name: 'Categories',
        component: Categories,
        meta: {
            title: "Amazing Food Categories - EasyEats | Order Food Online"
        },
    },
    {
        path: '/food-category/:categoryId/',
        name: 'CategoryDetail',
        component: CategoryDetail,
        meta: {
            title: "Category Detail - EasyEats | Order Food Online"
        }
    }
]

export default routes