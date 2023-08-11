import React from 'react';
import { Grid, Box, Container, Divider } from '@mui/material';
// import google from '../../assets/images/goglestore.svg';
// import apple from '../../assets/images/Playstore.svg';
const Footer = () => {
	return (
		<Box style={{ backgroundColor: '#e6e7e8', paddingBottom: 50 }}>
			<Container>
				<Grid container>
					<Grid item xs={12} lg={8}>
						<Grid container>
							<Grid item xs={12} lg={4}>
								<Box>
									<h3 style={{ color: '#ed2e30', fontSize: '28.58px' }}>
										Neeed Help
									</h3>
									<Box>
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Contact Us
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Track Order
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Returns & Refunds
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											FAQ's
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											My Account
										</span>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Box>
									<h3 style={{ color: '#ed2e30', fontSize: '28.58px' }}>
										Company
									</h3>
									<Box>
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											About Us
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Career
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Store Near Me
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Community Initiatives
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Souled Army
										</span>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Box>
									<h3 style={{ color: '#ed2e30', fontSize: '28.58px' }}>
										More Info
									</h3>
									<Box>
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Term and Conditions
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Privacy Policy
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Shipping Policy
										</span>
										<br />
										<br />
										<span
											style={{
												color: '#58595b',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											Sitemap
										</span>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Box>
							<h3 style={{ color: '#ed2e30', fontSize: '28.58px' }}></h3>
							<br></br>
							<Box>
								<span
									style={{
										color: '#58595b',
										fontSize: 16,
										fontWeight: 'bold',
									}}>
									COD Available
								</span>
								<br />
								<br />
								<span
									style={{
										color: '#58595b',
										fontSize: 16,
										fontWeight: 'bold',
									}}>
									30 Days Easy Return
								</span>
								<br />
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Divider style={{ background: 'white', marginTop: 10 }} />

				<Divider style={{ background: 'white', marginTop: 10 }} />
			</Container>
		</Box>
	);
};

export default Footer;
