import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import AbgabeView from '../views/AbgabeView'
import ModuleView from '../views/ModuleView'

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
    path: '/abgabe',
    name: 'abgabe',
    component: AbgabeView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModuleView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
