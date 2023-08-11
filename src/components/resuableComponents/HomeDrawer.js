import React from 'react';
import { Box, Drawer, Divider, List, Button } from '@mui/material';
import logo from '../../assets/images/API.png';
const HomeDrawer = ({ draw, setDraw }) => {
	return (
		<>
			<Drawer
				anchor={'left'}
				open={draw}
				PaperProps={{
					sx: { width: '80%' },
				}}
				onClose={() => {
					draw ? setDraw(false) : setDraw(true);
					// dispatch(toggleLoginDrawerModal(false));
				}}
				style={{ width: '100%' }}
				// className={styles.drawerlogin}
				onKeyDown
				classes={{
					paper: { width: '80%' },
				}}>
				<div>
					<Box
						style={{
							display: 'flex',
							// justifyContent: 'space-between',
							padding: 15,
						}}>
						<img src={logo} />
						{/* <Button style={{ border: '1px solid #148c8d' }}>
							Login\Register
						</Button> */}
					</Box>
				</div>
				<Divider />
				<Box
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: 20,
					}}>
					<Box>
						<span>Men</span>
					</Box>
					<Box>
						<span>Women</span>
					</Box>
					<Box>
						<span>Kids</span>
					</Box>
				</Box>
				<Box style={{ padding: 20 }}>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>

					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
					<Box
						mt={3}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span>Topwear</span>
						<img
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>
				</Box>
			</Drawer>
		</>
	);
};

export default HomeDrawer;
