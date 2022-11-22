import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6eb55166 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e0f9d9ee = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5814cf42 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f358e6ec = () => interopDefault(import('..\\pages\\photos\\index.vue' /* webpackChunkName: "pages/photos/index" */))
const _bd6a457c = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _e4671c7e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _7d8f2972 = () => interopDefault(import('..\\pages\\photos\\_id.vue' /* webpackChunkName: "pages/photos/_id" */))
const _e325a7aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6eb55166,
    name: "about"
  }, {
    path: "/blog",
    component: _e0f9d9ee,
    name: "blog"
  }, {
    path: "/login",
    component: _5814cf42,
    name: "login"
  }, {
    path: "/photos",
    component: _f358e6ec,
    name: "photos"
  }, {
    path: "/profile",
    component: _bd6a457c,
    name: "profile"
  }, {
    path: "/blog/:slug",
    component: _e4671c7e,
    name: "blog-slug"
  }, {
    path: "/photos/:id",
    component: _7d8f2972,
    name: "photos-id"
  }, {
    path: "/",
    component: _e325a7aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
