import { Outlet } from 'react-router-dom';
//
import Nav from '../nav/index';
import SubNav from '../nav/SubNav';

export default function MainLayout() {
    return (
        <>
            <SubNav />
            <Nav />
            <Outlet />
        </>
    );
}