import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView/FrontView.vue'),
    children: [
      {
        path: '',
        // name: 'Home', // 要做預設路徑的話要隱藏 name
        component: () => import('../views/FrontView/UserHome.vue')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/FrontView/UserHome.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/FrontView/UserAbout.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/FrontView/UserProducts.vue')
      },
      {
        path: 'product/:id',
        name: 'product/:id',
        component: () => import('../views/FrontView/UserProductDetail.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/FrontView/UserFavorite.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/FrontView/UserCart.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/FrontView/UserCheckout.vue')
      },
      {
        path: 'order_payment/:orderId',
        name: 'order_payment',
        component: () => import('../views/FrontView/UserOrderPayment.vue')
      },
      {
        path: 'order_completed',
        name: 'order_completed',
        component: () => import('../views/FrontView/UserOrderCompleted.vue')
      },
      {
        path: 'query_order',
        name: 'query_order',
        component: () => import('../views/FrontView/UserQueryOrder.vue')
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('../views/FrontView/UserArticles.vue')
      },
      {
        path: 'blog/:id',
        name: 'blog/:id',
        component: () => import('../views/FrontView/UserArticle.vue')
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('../views/FrontView/UserFaq.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/FrontView/UserTest.vue')
      }
    ]
  },
  {
    // 登入，屬於前台
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Dashboard/AdminIndex.vue')
      },
      {
        path: 'products',
        name: 'adminProducts',
        component: () => import('../views/Dashboard/AdminProducts.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/Dashboard/AdminOrders.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/Dashboard/AdminCoupons.vue')
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('@/views/Dashboard/AdminArticles.vue')
      }
    ]
  },
  { //* 代表所有主頁面下的頁面，路由錯誤都會被導向
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'login' }
  }
  // 404 頁面
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})

export default router
