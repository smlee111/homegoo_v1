import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from './layouts/main';
import MapLayout from './layouts/map';
import LandLayout from './layouts/land';
import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';

// pages
import Main from './pages/Main';
import Map from './pages/Map';
import Land from './pages/Land';

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';

import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: 'app', element: <DashboardApp /> },
                { path: 'user', element: <User /> },
            ],
        },
        {
            path: '/land',
            element: <LandLayout />,
            children: [{ path: '', element: <Land /> }],
        },
        {
            path: '/map',
            element: <MapLayout />,
            children: [{ path: '', element: <Map /> }],
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Main /> },
                { path: 'map', element: <Map /> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },

        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
