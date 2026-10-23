import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),//懒加载
      meta: { title: '智渊智能科技有限公司官网' },
    },
  ],
  scrollBehavior: () => ({ top: 0 }),//页面初始位置为顶部
})

//afterEach 路由切换完成后的钩子，读取目标路由的meta.title并更新浏览器标签标题
router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : '智渊智能科技有限公司官网'
})
