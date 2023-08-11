import React from 'react';
import { Grid, Box, Button, Container } from '@mui/material';

const SlideCard = ({ img, title, title2 }) => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'yellow',
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
				}}></Grid>
			{/* <Grid
				item
				xs={6}
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'skyblue',
				}}>
				<Box>
					<h1>Summer Value Pack</h1>
				</Box>
			</Grid>
			<Grid
				item
				xs={6}
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'skyblue',
				}}></Grid> */}
		</Grid>
	);
};
export default SlideCard;
