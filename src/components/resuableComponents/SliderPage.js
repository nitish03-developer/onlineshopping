import React from 'react';
import Slider from 'react-slick';
import SlideCard from './SlideCard';
const SliderPage = () => {
	const settings = {
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		accessibility: false,
		afterChange: function (index) {
			// if (index + 1 === 3) {
			// 	setInterval(function () {
			// 		dispatch(toggleOnBoard(false));
			// 	}, 3000);
			// }
		},
	};

	return (
		<>
			<Slider {...settings} style={{ overflowX: 'hidden' }}>
				<SlideCard
					img={
						'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-1-Banner_Rakhi-2023.jpg?format=webp&w=1366&dpr=1.0'
					}
					title='Manage Your Bills & Invoice  '
					title2='At One Place'
				/>
				<SlideCard
					img={
						'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner_2_cNb5rYB.jpg?format=webp&w=1366&dpr=1.0'
					}
					title='Manage Your Projects & '
					title2='Tasks At One Place'
				/>
				<SlideCard
					img={
						'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_knitshirts_1.jpg?format=webp&w=1366&dpr=1.0'
					}
					title='Manage & Track Inventory  '
					title2='Easily At One Place'
				/>
			</Slider>
		</>
	);
};
export default SliderPage;
