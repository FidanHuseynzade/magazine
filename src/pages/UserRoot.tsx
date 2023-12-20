import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UserNavbar';

const UserRoot: React.FC = () => (
	<div>
        <Navbar/>
		<Outlet/>
	</div>
);

export default UserRoot;