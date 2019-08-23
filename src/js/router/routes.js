import Top from '../templates/Top';
import About from '../templates/About';
import NotFound from '../templates/Notfound';

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
