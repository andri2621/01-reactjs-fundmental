import React from 'react';
import styled from 'styled-components';
import CardBox from './components/home/CardBox';

const Home = () => {
	return (
		<HomeStyle>
			<h3>Kodingzero Bootcamp Javascript Curriculum, checkout on <a target="_blank" href="https://youtu.be/FNQmxY59Npo">youtube</a></h3>
			<HomeCard>
				<CardBox
					theme={'#ff6666'}
					title={'Ecmascript ES6/7'}
					overview={`Basic dari react adalah Javascript atau Ecmascript 6/7.
					Dengan basic yang kuat kamu bisa bermain di react.js, react-native, desktop electron atau node.js`}
				/>
				<CardBox
					theme={'#088da5'}
					title={'React'}
					overview={`React adalah javascript library untuk develop 
					user-interface (front-end). Sangat popular dan di adopsi oleh startup
					ternama, seperti instagram, tokopedia, shopee, uber, dll.`}
				/>
				<CardBox
					theme={'#666666'}
					title={'Redux'}
					overview={`Redux is predictable state container for JavaScript apps. Berfungsi
					seperti global store yang memudahkan kita handle state antar komponen.`}
				/>
				<CardBox
					theme={'#00ced1'}
					title={'React Native'}
					overview={`Framework UI untuk membuat mobile apps. Instagram adalah apps yang
					sangat popular yang dibangun dengan React Native.`}
				/>
					<CardBox
					theme={'#daa520'}
					title={'Node.js'}
					overview={`Node.js is server-side JavaScript runtime environment.`}
				/>
				<CardBox
					theme={'#008080'}
					title={'Gatsby'}
					overview={`Blazing fast modern site generator for React. Go beyond static sites: build blogs, ecommerce sites, full-blown apps, 
					and more with Gatsby.`}
				/>
			</HomeCard>
		</HomeStyle>
	);
};

export default Home;

const HomeStyle = styled.div`
	background-color: #f8fafc;
	width: 100%;
	display: flex;
	flex-direction: column;
	> h3 {
		font-weight: 600;
		color: #294661;
	}
`;

const HomeCard = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content:center;
`;
