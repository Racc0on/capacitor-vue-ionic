import Vue from 'vue'
import {IonicVueRouter} from '@ionic/vue'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'
const BlogPostPage = () => import(/* webpackChunkName: "users" */ "@/views/BlogPostPage.vue");


Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'CameraPage',
      component: CameraPage
    },
    {
      path: '/geo-location-page',
      name: 'GeolocationPage',
      component: GeolocationPage
    },
    {
      path: '/blog/:id',
      name: 'blogPostPage',
      component: BlogPostPage
    }
  ]
})
