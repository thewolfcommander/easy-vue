import Vue from 'vue'
import VueRouter from 'vue-router'
// import NProgress from 'nprogress'
import store from '@/store'

import EssentialRoutes from './essential'
import AccountsRoutes from './accounts'
import FoodRoutes from './foods'
import GroceryRoutes from './grocery'
import OrdersRoutes from './orders'

Vue.use(VueRouter)
var allRoutes = []

allRoutes = allRoutes.concat(
  ...EssentialRoutes,
  ...AccountsRoutes,
  ...FoodRoutes,
  ...GroceryRoutes,
  ...OrdersRoutes,
)

const routes = allRoutes

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  store.dispatch('startLoading')
    .then(() => {
      setTimeout(() => {

        next()
        console.log(to, from)
      }, 200)
    })
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  setTimeout(() => {
    store.dispatch('stopLoading')
    console.log(to, from)
  }, 200)
})



// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  console.log(previousNearestWithMeta);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});



// Handling Unauthenticated Requests
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

// Handling Dboy Requests
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresDboy)) {
//     if (store.getters.getisDboyVerified) {
//       next()
//       return
//     }
//     next({name: 'Profile'})
//   } else {
//     next()
//   }
// })


export default router