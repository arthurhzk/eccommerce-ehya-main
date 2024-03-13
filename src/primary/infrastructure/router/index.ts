import { createRouter, createWebHistory } from 'vue-router'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNameEnum.HOME,
      component: () => import('@/primary/pages/HomePage.vue')
    },

    {
      path: '/products',
      name: RouteNameEnum.PRODUCTS,
      component: () => import('@/primary/pages/ProductsPage.vue')
    },
    {
      path: '/cart',
      name: RouteNameEnum.CART,
      component: () => import('@/primary/pages/CartPage.vue')
    },
    {
      path: '/products/:id',
      name: RouteNameEnum.PRODUCTID,
      component: () => import('@/primary/pages/ProductDetailPage.vue')
    },
    {
      path: '/login',
      name: RouteNameEnum.LOGIN,
      component: () => import('@/primary/pages/LoginPage.vue')
    },
    {
      path: '/register',
      name: RouteNameEnum.REGISTER,
      component: () => import('@/primary/pages/RegisterPage.vue')
    },
    {
      path: '/profile',
      name: RouteNameEnum.PROFILE,
      component: () => import('@/primary/pages/ProfilePage.vue')
    },
    {
      path: '/about',
      name: RouteNameEnum.ABOUT,
      component: () => import('@/primary/pages/AboutPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: RouteNameEnum.NOT_FOUND,
      component: () => import('@/primary/pages/NotFoundPage.vue')
    }
  ]
})

export default router
