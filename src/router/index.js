import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    children: [
      {
        path: '/home',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: '/home/reg',
        name: 'Reg',
        component: () => import('../views/Reg.vue'),
        meta: {
          title: '注册'
        }
      }
    ],
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '学生信息管理系统'
    }
  }, {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/inner',
    name: 'Inner',
    component: () => import('../views/inner/inner.vue'),

    children: [
      {
        path: '/inner',
        redirect: '/inner/user'
      },
      {
        path: '/inner/user',
        name: 'User',
        component: () => import('../views/inner/user.vue'),
        meta: {
          title: '学生信息'
        }
      },
      {
        path: '/inner/status',
        name: 'Status',
        component: () => import('../views/inner/status.vue'),
        meta: {
          title: '奖惩和缺勤情况'
        }
      },
      {
        path: '/inner/exam',
        name: 'Exam',
        component: () => import('../views/inner/exam/exam.vue'),
        meta: {
          title: '考务管理'
        }
      },
      {
        path: '/inner/class',
        name: 'Class',
        component: () => import('../views/inner/class/class.vue'),
        meta: {
          title: '选课管理'
        }
      },
      {
        path: '/inner/department',
        name: 'Department',
        component: () => import('../views/inner/department/department.vue'),
        meta: {
          title: '选课管理'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
