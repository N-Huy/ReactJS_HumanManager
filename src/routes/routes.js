import config from '~/config';

// Layouts
import LoginLayout from '~/layouts/LoginLayout';

// Pages
import ECommerce from '~/pages/ECommerce';
import Login from '~/components/Login';
import ForgotPass from './../components/ForgotPass';
import Information from '~/pages/Information';
import BlogManager from '~/pages/BlogManager';
import Blog from '~/pages/Blog';
import Degree from '~/pages/Degree';
import Department from '~/pages/Department';
import Role from '~/pages/Role';
import User from '~/pages/User';
import SalaryManager from '~/pages/SalaryManager';
import Test from '~/pages/Test';
import Schedule from '~/pages/Sched';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Login, layout: LoginLayout },
    //{ path: config.routes.home, component: UserProfile },
    { path: config.routes.ecommerce, component: ECommerce, auth: ['Degree.VIEW'] },
    { path: config.routes.information, component: Information, auth: ['Blog.VIEW', 'zxmczxc'] },
    { path: config.routes.blogmanager, component: BlogManager, auth: ['Blog.VIEW', 'zxmczxc'] },
    { path: config.routes.blog, component: Blog, auth: ['Blog.VIEW', 'zxmczxc'] },
    { path: config.routes.degreemanager, component: Degree, auth: ['Degree.VIEW'] },
    { path: config.routes.departmentmanager, component: Department, auth: ['Blog.VIEW'] },
    { path: config.routes.rolemanager, component: Role, auth: ['Degree.VIEW'] },
    { path: config.routes.salarymanager, component: SalaryManager, auth: ['Blog.VIEW'] },
    { path: config.routes.usermanager, component: User, auth: ['Blog.VIEW'] },
    { path: config.routes.test, component: Test, auth: ['Blog.VIEW'] },
    { path: config.routes.schedule, component: Schedule, auth: ['Blog.VIEW'] },

    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.forgetPass, component: ForgotPass, layout: LoginLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

// 'kế toán' info
