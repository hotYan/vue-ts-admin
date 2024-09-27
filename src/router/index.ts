import { createMemoryHistory, createRouter } from 'vue-router'
const routes = [
  { 
    path: '/', 
    component:  ()=>import('@/components/Test.vue') 
  },
  { path: '/about', component: ()=>import('@/components/Test.vue') },

]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router