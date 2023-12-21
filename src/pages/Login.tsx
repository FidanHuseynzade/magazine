import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Helmet } from 'react-helmet';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Login: React.FC = () => (
	<>
	<Helmet>
      <title>Login</title>
	  <link rel="icon" href="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg" />
    </Helmet>
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <div>
      <h1>Username</h1>
      <Input style={{ width: '100%' }} placeholder="Enter username" />
      <h1>Password</h1>
      <Input style={{ width: '100%' }} placeholder="Enter password" type="password" />
      <Checkbox style={{ margin: '15px' }} onChange={onChange}>
        Publisher
      </Checkbox>
      <Button type="primary" style={{ width: '100%' }}>
        Login
      </Button>
    </div>
    <div>
      <img
        src="https://i.pinimg.com/736x/2e/50/32/2e503286384d59016a75bc0498414fa4.jpg"
        alt="Campaign Magazine"
        style={{ width: '350px', height: 'auto', borderRadius: '5px', border: '2px solid rgba(0, 0, 0, 0.253)',  }} 
      />
    </div>
  </div>
	</>
);

export default Login;
