/* only page components*/
import App from '@/App';

const Login = r =>
    require.ensure([], () => r(require('@/page/login')), 'login');
const Home = r =>
    require.ensure([], () => r(require('@/page/home/home')), 'home');
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

const router = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                redirect: '/login' //默认路由，直接重定向到地址 /login
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/search',
                component: SearchDetail
            },
            {
                path: '/find',
                component: Find
            },
            {
                path: '/sweet',
                component: Sweet,
                meta: { keepAlive: true }
            }
        ]
    }
];

export default router;
