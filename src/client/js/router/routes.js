import Top from '@/templates/Top';
import About from '@/templates/About';
import NotFound from '@/templates/Notfound';

export default [
  {
    path: '/',
    component: Top,
  },
  { path: '/about', component: About },
  { path: '/notfound', component: NotFound },
  { path: '*', redirect: '/notfound' }
]
