import { Box, Container, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import logo from '../../assets/images/API.png';
import three from '../../assets/images/threeline.svg';
import HomeDrawer from './HomeDrawer';
const items: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.antgroup.com'>
				Jeans
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.aliyun.com'>
				Cargo
			</a>
		),
		// icon: <SmileOutlined />,
		// disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				Wind CheatersWind CheatersWind CheatersWind CheatersWind CheatersWind
				Cheaters
			</a>
		),
		// disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},

	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},

	{
		key: '3',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.luohanacademy.com'>
				3rd menu item (disabled)
			</a>
		),
		disabled: true,
	},
];
const Header = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const [draw, setDraw] = useState(false);
	return (
		<>
			<Box style={{ background: '#e11b23' }}>
				<Container>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						{matches ? (
							<></>
						) : (
							<>
								<Box style={{ display: 'flex' }}>
									<Box
										style={{
											paddingTop: 15,
											paddingLeft: 30,
											paddingRight: 30,
											paddingBottom: 15,
											borderLeft: '1px solid #525050',
											borderRight: '1px solid #525050',
										}}>
										<span style={{ color: 'white', fontWeight: 'bold' }}>
											WOMEN
										</span>
									</Box>
									<Box
										style={{
											borderRight: '1px solid #525050',
											paddingTop: 15,
											paddingLeft: 30,
											paddingRight: 30,
											paddingBottom: 15,
										}}>
										<span style={{ color: 'white', fontWeight: 'bold' }}>
											MEN
										</span>
									</Box>
									<Box
										style={{
											borderRight: '1px solid #525050',
											paddingTop: 15,
											paddingLeft: 30,
											paddingRight: 30,
											paddingBottom: 15,
										}}>
										<span style={{ color: 'white', fontWeight: 'bold' }}>
											KIDS
										</span>
									</Box>
								</Box>
								<Box style={{ display: 'flex' }}>
									<Box>
										<span
											style={{
												color: 'white',
												fontWeight: 'bold',
												fontSize: 12,
											}}>
											TRACKORDER
										</span>
									</Box>
									<Box ml={2}>
										<span
											style={{
												color: 'white',
												fontWeight: 'bold',
												fontSize: 12,
											}}>
											CONTACTUS
										</span>
									</Box>
									<Box ml={2}>
										<span
											style={{
												color: 'white',
												fontWeight: 'bold',
												fontSize: 12,
											}}>
											DOWNLOADAPP
										</span>
									</Box>
								</Box>
							</>
						)}
					</Box>
				</Container>
			</Box>
			<Box
				style={{
					paddingLeft: 30,
					paddingRight: 30,
					display: 'flex',
					// justifyContent: 'space-between',
					boxShadow: '0 2px 3px rgba(0,0,0,.2)',
					backgroundColor: '#fff',
					zIndex: 100,
					position: 'relative',
					alignItems: 'center',
				}}>
				{matches ? (
					<>
						<img
							src={three}
							style={{ height: 45 }}
							onClick={() => setDraw(true)}
						/>
					</>
				) : (
					<img src={logo} />
				)}

				{matches ? (
					''
				) : (
					<>
						<Box
							ml={5}
							sx={{
								'&:hover': {
									borderBottom: '2px solid red',
									// padding: 1,
								},
							}}>
							<Dropdown menu={{ items }}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										TOP WEAR
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</Box>
						<Box ml={3}>
							<Dropdown menu={{ items }}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										BOTTOM WEAR
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</Box>
						<Box ml={3}>
							<Dropdown menu={{ items }}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										SHOES & ACCESSORIES
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</Box>
						<Box ml={3}>
							<Dropdown menu={{ items }}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										BASICS
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</Box>
						<Box ml={3}>
							<Dropdown menu={{ items }}>
								<a onClick={(e) => e.preventDefault()}>
									<Space>
										COLLECTION
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</Box>
					</>
				)}
			</Box>
			<HomeDrawer draw={draw} setDraw={setDraw} />
		</>
	);
};

export default Header;
