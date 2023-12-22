import React from 'react';
import { Input, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Helmet } from 'react-helmet';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Register: React.FC = () => (
	<>
	<Helmet>
      <title>Register</title>
	  <link rel="icon" href="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg" />
    </Helmet>
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <div>
	<h1>Email</h1>
      <Input style={{ width: '100%' }} placeholder="Enter email" />
	  <h1>Username</h1>
      <Input style={{ width: '100%' }} placeholder="Enter username" />
      <h1>Password</h1>
      <Input style={{ width: '100%' }} placeholder="Enter password" type="password" />
      <Button type="primary" style={{ width: '100%', marginTop:'15px' }}>
        Register
      </Button>
    </div>
  </div>
	</>
);

export default Register;
