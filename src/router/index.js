import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/ViewMain'
import Favorites from '../views/ViewFavorites'
import Recipe from '../views/ViewRecipe'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
