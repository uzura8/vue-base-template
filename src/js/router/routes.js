import Top from '../templates/Top';
import About from '../templates/About';
import NotFound from '../templates/Notfound';
import Signup from '../templates/Signup'
import Signin from '../templates/Signin'
import MemberTop from '../templates/MemberTop'

export default [
  {
    path: '/',
    component: Top,
    //meta: { requiresAuth: true },
    //children: [{
    //  path: 'tasks/:id',
    //  component: TaskDetailModal,
    //  name: 'taskDetailModal',
    //  meta: { requiresAuth: true }
    //}]
  },
  //{
  //  path: '/login',
  //  component: LoginView
  //},
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/member',
    name: 'MemberTop',
    component: MemberTop,
    meta: { requiresAuth: true }
  },
  { path: '/about', component: About },
  { path: '/notfound', component: NotFound },
  { path: '*', redirect: '/notfound' }
]
