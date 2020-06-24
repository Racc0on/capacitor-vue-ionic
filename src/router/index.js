import Vue from 'vue'
import {IonicVueRouter} from '@ionic/vue'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'
import TodoList from '@/components/TodoList'
import AddTodoItem from '@/components/AddTodoItem'
import NewPage from '@/components/NewPage'

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

    { path: '/todos',
      component: TodoList 
    },

    { path: '/todos/add',
      component: AddTodoItem
    },

    { path: '/newpage',
      name: 'NewPage',
      component: NewPage 
    },

  ]
})
