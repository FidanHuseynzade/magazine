import { Helmet } from 'react-helmet';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './News.css'
import { Pagination } from 'swiper/modules';
import Weather from '../components/Weather';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '250px',
}));

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>HomePage</title>
      <link rel="icon" href="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg" />
    </Helmet>
    <Weather />
    <div style={{ textAlign: 'center' }}>
      <h1>News</h1>
    </div>
    <div style={{ position: 'relative', width: '100%', maxHeight: '500px', overflow: 'hidden' }}>
      <img
        style={{ width: '100%', height: 'auto', filter: 'brightness(60%)' }}
        src="https://www.rollingstone.com/wp-content/uploads/2023/08/ken-song.jpg?w=1581&h=1054&crop=1"
        alt=""
      />
      <div
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '30px' }}>Ken was the poster boy for cinema's year of toxic masculinity</p>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <h1>Entertainment</h1>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/12/4-1.png?w=616&h=411&crop=1&quality=85&resize=616,411" alt="" /> <p>The 38 Most Anticipated Movies of 2024</p></Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/12/5.png?w=616&h=411&crop=1&quality=85&resize=616,411" alt="" /> <p>The top 10 Fashion Moments of 2023</p></Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/12/4.png?w=407&h=271&crop=1" alt="" /> <p>The Best Latin Music of 2023</p></Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/12/viralmoments.png?w=407&h=271&crop=1" alt="" /> <p>The Most Viral Moments of 2023</p></Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/12/Anticipated-Culture_BOOKS-2.png?w=407&h=271&crop=1" alt="" /> <p>The 25 Most Anticipated Books of 2024</p></Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Item><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://api.time.com/wp-content/uploads/2023/07/rev-1-BAR-00822_High_Res_JPEG-e1689956612376.jpeg?quality=85&w=407&h=271&crop=1" alt="" /> <p>'Barbie' Leads Golden Globe Nominations</p></Item>
        </Grid>
      </Grid>
    </Box>
    <h1 style={{ marginTop: '60px' }}>You should know</h1>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ marginTop: '20px' }}>
      <SwiperSlide><img src="https://www.mediaweek.com.au/wp-content/uploads/2022/01/UK-Tele-front-page-crop-e1643573266781.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2021/11/27/GettyImages-1236847096-e1638442619620.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.guim.co.uk/img/media/654809508b9b39c7c3b419b873f081bc3075518e/0_63_5182_3111/master/5182.jpg?width=1200&quality=85&auto=format&fit=max&s=6d231ed8f1de2ab4f7699a2ba4b548bb" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.telegraph.co.uk/content/dam/world-news/2022/02/25/ss-2022-2-25-3-56_trans_NvBQzQNjv4BqsT8WkHhIIGcqf-eU4anH8bkcnEMN6jgniYeqwz6a86k.png" alt="" /></SwiperSlide>
    </Swiper>
  </>
);

export default HomePage;
