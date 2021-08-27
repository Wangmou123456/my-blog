const blogs = () => import('@/views/backAll/blogs/blogs.vue')
const labels = () => import('@/views/backAll/labels/labels.vue')

export default {
  path: '/back-all',
  component: () => import('@/views/backAll/main.vue'),
  redirect: '/back-all/blogs',
  children: [
    {
      path: '/back-all/blogs',
      name: 'blogs',
      component: blogs
    },
    {
      path: '/back-all/labels',
      name: 'labels',
      component: labels
    }
  ]
}
