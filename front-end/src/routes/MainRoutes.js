import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const Home = Loadable(lazy(() => import('views/home/home.screen')));
const AdminDashboard = Loadable(lazy(() => import('views/admin-dashboard')));
const UserDetails = Loadable(lazy(() => import('views/admin-dashboard/users-details/UserDetails')));
const AboutUs = Loadable(lazy(() => import('views/footer/footer-components/about-us/AboutUs')));
const FourOhFour = Loadable(lazy(() => import('views/utilities/404')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/admin-dashboard',
            element: <AdminDashboard />
        },
        {
            path: '/admin-dashboard/users',
            element: <UserDetails />
        },
        {
            path: '/about-us',
            element: <AboutUs />
        },
        {
            path: '/404',
            element: <FourOhFour />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <Home />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
