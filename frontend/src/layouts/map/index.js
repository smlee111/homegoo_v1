import { Outlet } from 'react-router-dom';
// components
import Nav from '../nav/index';

export default function MapLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}