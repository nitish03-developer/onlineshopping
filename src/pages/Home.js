import React from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import SliderPage from '../components/resuableComponents/SliderPage';
import FandomSection from '../components/resuableComponents/FandomSection';
import Carousel from '../components/resuableComponents/Carousel';
import Carousel2 from '../components/resuableComponents/Carousel2';
import { Box } from '@mui/material';
import HomeDrawer from '../components/resuableComponents/HomeDrawer';

const Home = () => {
	return (
		<>
			<Header />
			<SliderPage />
			<FandomSection />
			<Carousel />
			<Box style={{ marginTop: 50 }}>
				<h1 style={{ textAlign: 'center' }}>COLECTIONS</h1>
			</Box>
			<Carousel2 />
			<Footer />
		</>
	);
};

export default Home;
