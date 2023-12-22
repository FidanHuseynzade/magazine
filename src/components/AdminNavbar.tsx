import React, { useState } from 'react';
import './UserNavbar.css';

const AdminNavbar: React.FC = () => {

    return (
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img
                src="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg"
                alt="Profile"
                style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }}
            />
            <h1>Admin Panel</h1>

            <button type='submit' style={{ marginTop: '15px', border: 'none', backgroundColor: '#1877F2', color: '#fff', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
            }}>
                Logout
            </button>

        </div>
    );
};

export default AdminNavbar;
