import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from 'vue-router'
import * as Vue from 'vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ProfileView from '../views/ProfileView'
import ModuleView from '../views/ModuleView'
import LoggedIn from '../components/LoggedIn'
import LoggedOut from '../components/LoggedOut'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-18548568.okta.com.com/oauth2/default',
  clientId: '{0oa7sw1bo3gIxcIId5d7}',
  redirectUri: 'http://localhost:3000/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModuleView
  },   {
    path: '/loggedout',
    name: 'LoggedOut',
    component: LoggedOut
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    path:'/',
    name: 'LoggedIn',
    component: LoggedIn,
    meta: {
      requiresAuth: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router()
