import Categories from '@/views/products/groceries/Categories'
import CategoryDetail from '@/views/products/groceries/CategoryDetail'
import GroceryHome from '@/views/products/groceries/GroceryHome'
import GroceryMenu from '@/views/products/groceries/GroceryMenu'
import SubCategories from '@/views/products/groceries/SubCategories'
import SubCategoryDetail from '@/views/products/groceries/SubCategoryDetail'


const routes = [
    {
        path: '/groceries/',
        name: 'GroceryHome',
        component: GroceryHome,
        meta: {
            title: "Groceries Home - EasyEats | Order Food Online"
        }
    },
    {
        path: '/grocery-items/',
        name: 'GroceryMenu',
        component: GroceryMenu,
        meta: {
            title: "Groceries Items - EasyEats | Order Food Online"
        }
    },
    {
        path: '/grocery-sub-categories/',
        name: 'SubCategories',
        component: SubCategories,
        meta: {
            title: "Grocery SubCategories - EasyEats | Order Food Online"
        },
    },
    {
        path: '/grocery-sub-categories/:subCategoryId/',
        name: 'SubCategoryDetail',
        component: SubCategoryDetail,
        meta: {
            title: "Sub Category Detail - EasyEats | Order Food Online"
        }
    },
    {
        path: '/grocery-categories/',
        name: 'GroceryCategories',
        component: Categories,
        meta: {
            title: "Amazing Grocery Categories - EasyEats | Order Food Online"
        }
    },
    {
        path: '/grocery-category/:categoryId/',
        name: 'GroceryCategoryDetail',
        component: CategoryDetail,
        meta: {
            title: "Category Detail - EasyEats | Order Food Online"
        }
    }
]


export default routes