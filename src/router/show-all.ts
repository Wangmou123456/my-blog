const home = () => import('@/views/showAll/home/home.vue')
const about = () => import('@/views/showAll/about/about.vue')
const label = () => import('@/views/showAll/label/label.vue')
const tools = () => import('@/views/showAll/tools/tools.vue')
const blog = () => import('@/views/showAll/blog/blog.vue')

export default {
  path: '/showAll',
  component: () => import('@/views/showAll/main.vue'),
  redirect: '/showAll/home',
  children: [
    {
      path: '/showAll/home',
      name: 'home',
      component: home
    },
    {
      path: '/showAll/about',
      name: 'about',
      component: about
    },
    {
      path: '/showAll/label',
      name: 'label',
      component: label
    },
    {
      path: '/showAll/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/showAll/blog/:blogId',
      name: 'blog',
      component: blog
    }
  ]
}
