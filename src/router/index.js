import Vue from 'vue'
import {IonicVueRouter} from '@ionic/vue'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'
const BlogPostPage = () => import(/* webpackChunkName: "users" */ "@/views/BlogPostPage.vue");
const ProjectStoryPage = () =>
  import(/* webpackChunkName: "users" */ "@/views/ProjectStoryPage.vue");
const ARDemoPage = () =>
  import(/* webpackChunkName: "users" */ "@/views/ARDemoPage.vue");


Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: "/",
      name: "CameraPage",
      component: CameraPage
    },
    {
      path: "/geo-location-page",
      name: "GeolocationPage",
      component: GeolocationPage
    },
    {
      path: "/blog/:id",
      name: "blogPostPage",
      component: BlogPostPage
    },
    {
      path: "/project-story",
      name: "projectStoryPage",
      component: ProjectStoryPage
    },
    {
      path: "/demo-quick-ar",
      name: "demoQuickARPage",
      component: ARDemoPage
    }
  ]
});
