/* only page components */
import App from '@/App';

const page404 = r => require.ensure([], () => r(require('@/page/404')), '404');
const Login = r =>
  require.ensure([], () => r(require('@/page/login')), 'login');
const Home = r =>
  require.ensure([], () => r(require('@/page/home/home')), 'home');
const Homedetail = r =>
  require.ensure(
    [],
    () => r(require('@/page/home/children/detail')),
    'homedetail'
  );
const SearchDetail = r =>
  require.ensure(
    [],
    () => r(require('@/components/searchdetail/searchdetail')),
    'searchdetail'
  );
const Find = r =>
  require.ensure([], () => r(require('@/page/find/find')), 'find');
const Sweet = r =>
  require.ensure([], () => r(require('@/page/sweet/sweet')), 'sweet');
const Exam = r =>
  require.ensure([], () => r(require('@/page/exam/exam')), 'exam');
const Test = r =>
  require.ensure([], () => r(require('@/page/test/test')), 'test');
const Test1 = r =>
  require.ensure([], () => r(require('@/page/test/test.detail')), 'test');
const Test2 = r =>
  require.ensure([], () => r(require('@/page/test/test.detail.1')), 'test');

export default [
  { path: '*', component: page404 },
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        redirect: '/login' // 默认路由，直接重定向到地址 /login
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/home',
        component: Home,
        meta: { keepAlive: true }
      },
      {
        path: '/homedetail',
        component: Homedetail
      },
      {
        path: '/search',
        component: SearchDetail
      },
      {
        path: '/find',
        component: Find,
        meta: { keepAlive: true }
      },
      {
        path: '/sweet',
        component: Sweet,
        meta: { keepAlive: true }
      },
      {
        path: '/exam',
        component: Exam
      },
      {
        path: '/test/:id',
        component: Test,
        children: [
          {
            path: '/test1',
            component: Test1
          },
          {
            path: '/test2',
            component: Test2
          }
        ]
      }
    ]
  }
];
