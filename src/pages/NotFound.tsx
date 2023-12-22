import { Button } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NotFound:React.FC = () => {
  return (
    <>
    <Helmet>
    <title>Page not found</title>
    <link rel="icon" href="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg" />
</Helmet>
    <img src="https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif" alt="" style={{width:'500px'}}/>
    <h1>404</h1>
    <h3>Sorry, we couldn't find this page.</h3>
    <Link to={'/'}><Button type="primary">Back to homepage</Button></Link>
    </>
  )
}

export default NotFound