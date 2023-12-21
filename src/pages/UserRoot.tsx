import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UserNavbar';
import Footer from '../components/UserFooter';

const UserRoot: React.FC = () => (
	<div>
        <Navbar/>
		<Outlet/>
		<Footer/>
	</div>
);

export default UserRoot;