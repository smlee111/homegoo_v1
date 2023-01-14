import { Outlet } from 'react-router-dom';
//
import Nav from '../nav/index';

export default function ManageLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}
