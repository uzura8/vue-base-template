import Top from '../templates/top';
import About from '../templates/about';
import NotFound from '../templates/notfound';

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
  { path: '/about', component: About },
  { path: '/notfound', component: NotFound },
  { path: '*', redirect: '/notfound' }
]
