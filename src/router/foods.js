import Categories from '@/views/products/foods/Categories'
import CategoryDetail from '@/views/products/foods/CategoryDetail'
import Menu from '@/views/products/foods/Menu'
import RestaurantDetail from '@/views/products/foods/RestaurantDetail'
import Restaurants from '@/views/products/foods/Restaurants'


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
        children: [
            {
                path: '/restaurant/:restaurantId/',
                name: 'RestaurantDetail',
                component: RestaurantDetail,
                meta: {
                    title: "Restaurant Detail - EasyEats | Order Food Online"
                }
            }
        ]
    },
    {
        path: '/food-categories/',
        name: 'Categories',
        component: Categories,
        meta: {
            title: "Amazing Food Categories - EasyEats | Order Food Online"
        },
        children: [
            {
                path: '/food-category/:categoryId/',
                name: 'CategoryDetail',
                component: CategoryDetail,
                meta: {
                    title: "Category Detail - EasyEats | Order Food Online"
                }
            }
        ]
    }
]

export default routes