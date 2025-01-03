import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;