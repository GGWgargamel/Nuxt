import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0bd5527b = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _4c757ec9 = () => interopDefault(import('../pages/bizreg/index.vue' /* webpackChunkName: "pages/bizreg/index" */))
const _37a2c75a = () => interopDefault(import('../pages/consult/index.vue' /* webpackChunkName: "pages/consult/index" */))
const _32053e8e = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _61d2cbfd = () => interopDefault(import('../pages/donwHouseApp/index.vue' /* webpackChunkName: "pages/donwHouseApp/index" */))
const _70a5b9ed = () => interopDefault(import('../pages/downapp/index.vue' /* webpackChunkName: "pages/downapp/index" */))
const _c8e651be = () => interopDefault(import('../pages/errorinfo.vue' /* webpackChunkName: "pages/errorinfo" */))
const _33a22504 = () => interopDefault(import('../pages/jobs/index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _4116bcb3 = () => interopDefault(import('../pages/Logo/index.vue' /* webpackChunkName: "pages/Logo/index" */))
const _d4eaf8ec = () => interopDefault(import('../pages/mobile/index.vue' /* webpackChunkName: "pages/mobile/index" */))
const _64d31ec6 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _4ae20a09 = () => interopDefault(import('../pages/content/ContactViews.vue' /* webpackChunkName: "pages/content/ContactViews" */))
const _990fe708 = () => interopDefault(import('../pages/content/help.vue' /* webpackChunkName: "pages/content/help" */))
const _35aeaf0e = () => interopDefault(import('../pages/content/news.vue' /* webpackChunkName: "pages/content/news" */))
const _72fae5c8 = () => interopDefault(import('../pages/content/newsone.vue' /* webpackChunkName: "pages/content/newsone" */))
const _e93ad2a4 = () => interopDefault(import('../pages/content/newstwo.vue' /* webpackChunkName: "pages/content/newstwo" */))
const _25766eb6 = () => interopDefault(import('../pages/mobile/About.vue' /* webpackChunkName: "pages/mobile/About" */))
const _7ee0d7b9 = () => interopDefault(import('../pages/mobile/Bizreg.vue' /* webpackChunkName: "pages/mobile/Bizreg" */))
const _7b291984 = () => interopDefault(import('../pages/mobile/Consult.vue' /* webpackChunkName: "pages/mobile/Consult" */))
const _9c9bf090 = () => interopDefault(import('../pages/mobile/Contact.vue' /* webpackChunkName: "pages/mobile/Contact" */))
const _7f76e312 = () => interopDefault(import('../pages/mobile/downapp.vue' /* webpackChunkName: "pages/mobile/downapp" */))
const _7f331cca = () => interopDefault(import('../pages/mobile/downHouseApp.vue' /* webpackChunkName: "pages/mobile/downHouseApp" */))
const _6d2fa924 = () => interopDefault(import('../pages/mobile/errorinfo.vue' /* webpackChunkName: "pages/mobile/errorinfo" */))
const _5f385859 = () => interopDefault(import('../pages/mobile/Help.vue' /* webpackChunkName: "pages/mobile/Help" */))
const _e87a9646 = () => interopDefault(import('../pages/mobile/JobSearch.vue' /* webpackChunkName: "pages/mobile/JobSearch" */))
const _3d220a2a = () => interopDefault(import('../pages/mobile/News.vue' /* webpackChunkName: "pages/mobile/News" */))
const _2364ee2a = () => interopDefault(import('../pages/mobile/newsone.vue' /* webpackChunkName: "pages/mobile/newsone" */))
const _06b539d1 = () => interopDefault(import('../pages/mobile/newstwo.vue' /* webpackChunkName: "pages/mobile/newstwo" */))
const _2c80e01a = () => interopDefault(import('../pages/mobile/PostDetails.vue' /* webpackChunkName: "pages/mobile/PostDetails" */))
const _5659b107 = () => interopDefault(import('../pages/mobile/Product.vue' /* webpackChunkName: "pages/mobile/Product" */))
const _97477490 = () => interopDefault(import('../pages/mobile/ProductDetail.vue' /* webpackChunkName: "pages/mobile/ProductDetail" */))
const _5d31fe86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _0bd5527b,
      name: "about"
    }, {
      path: "/bizreg",
      component: _4c757ec9,
      name: "bizreg"
    }, {
      path: "/consult",
      component: _37a2c75a,
      name: "consult"
    }, {
      path: "/contact",
      component: _32053e8e,
      name: "contact"
    }, {
      path: "/donwHouseApp",
      component: _61d2cbfd,
      name: "donwHouseApp"
    }, {
      path: "/downapp",
      component: _70a5b9ed,
      name: "downapp"
    }, {
      path: "/errorinfo",
      component: _c8e651be,
      name: "errorinfo"
    }, {
      path: "/jobs",
      component: _33a22504,
      name: "jobs"
    }, {
      path: "/Logo",
      component: _4116bcb3,
      name: "Logo"
    }, {
      path: "/mobile",
      component: _d4eaf8ec,
      name: "mobile"
    }, {
      path: "/product",
      component: _64d31ec6,
      name: "product"
    }, {
      path: "/content/ContactViews",
      component: _4ae20a09,
      name: "content-ContactViews"
    }, {
      path: "/content/help",
      component: _990fe708,
      name: "content-help"
    }, {
      path: "/content/news",
      component: _35aeaf0e,
      name: "content-news"
    }, {
      path: "/content/newsone",
      component: _72fae5c8,
      name: "content-newsone"
    }, {
      path: "/content/newstwo",
      component: _e93ad2a4,
      name: "content-newstwo"
    }, {
      path: "/mobile/About",
      component: _25766eb6,
      name: "mobile-About"
    }, {
      path: "/mobile/Bizreg",
      component: _7ee0d7b9,
      name: "mobile-Bizreg"
    }, {
      path: "/mobile/Consult",
      component: _7b291984,
      name: "mobile-Consult"
    }, {
      path: "/mobile/Contact",
      component: _9c9bf090,
      name: "mobile-Contact"
    }, {
      path: "/mobile/downapp",
      component: _7f76e312,
      name: "mobile-downapp"
    }, {
      path: "/mobile/downHouseApp",
      component: _7f331cca,
      name: "mobile-downHouseApp"
    }, {
      path: "/mobile/errorinfo",
      component: _6d2fa924,
      name: "mobile-errorinfo"
    }, {
      path: "/mobile/Help",
      component: _5f385859,
      name: "mobile-Help"
    }, {
      path: "/mobile/JobSearch",
      component: _e87a9646,
      name: "mobile-JobSearch"
    }, {
      path: "/mobile/News",
      component: _3d220a2a,
      name: "mobile-News"
    }, {
      path: "/mobile/newsone",
      component: _2364ee2a,
      name: "mobile-newsone"
    }, {
      path: "/mobile/newstwo",
      component: _06b539d1,
      name: "mobile-newstwo"
    }, {
      path: "/mobile/PostDetails",
      component: _2c80e01a,
      name: "mobile-PostDetails"
    }, {
      path: "/mobile/Product",
      component: _5659b107,
      name: "mobile-Product"
    }, {
      path: "/mobile/ProductDetail",
      component: _97477490,
      name: "mobile-ProductDetail"
    }, {
      path: "/",
      component: _5d31fe86,
      name: "index"
    }],

    fallback: false
  })
}
