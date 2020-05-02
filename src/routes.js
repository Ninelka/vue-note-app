import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

const lazyAbout = () => import ('./components/About.vue')

export const routes = [
    {path: '', component: Dashboard},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
    {path: '/about', component: lazyAbout}
];