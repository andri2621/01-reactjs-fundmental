import React from 'react';
import styled from 'styled-components';
import CardPrice from '../components/home/CardPrice';

const About = () => {
	return (
		<HomeStyle>
			<h3>Kuasain React from Zero To Hero ? Yuk di Order aja, mumpung masih promo !! Checkout on <a target="_blank" href="https://youtu.be/FNQmxY59Npo">youtube</a></h3>
			<HomeCard>
				<CardPrice theme={'#ff6666'} title={'React.js Fundamental'} subtitle={'Materi :'} materi={materi} />

				<CardPrice
					theme={'#088da5'}
					title={'Harga Promo: Rp. 195.000'}
					subtitle={'Cara Pembayaran:'}
					materi={price}
				/>
					<CardPrice
					theme={'#daa520'}
					title={'Transfer Pembayaran'}
					subtitle={'Rekening:'}
					materi={rekening}
				/>
								
				<CardPrice
					theme={'#00ced1'}
					title={'Next Release On May 2019'}
					subtitle={'Materi:'}
					materi={next}
				/>
			</HomeCard>
		</HomeStyle>
	);
};

export default About;

const materi = [
	'Ebook React & Ecmascript 6/7',
	'HTML/CSS',
	'CSS in JS / Styled Component',
	'State Management',
	'Component StateFull & Stateless',
	'PropTypes',
	'Single Page Application (SPA)',
	'GridLayout & Flebox CSS',
	'React Router',
	'Rest API',
	'Form Validation',
	'Hook',
	'Git',
	'Deploy To Heroku Cloud',
	'Full Access 50 Video Tutorial Kualitas HD',
	'Source Code'
];

const price = [
	'Lakukan pembayaran via rekening Bank Mandiri atas nama: Dian Cahya Permana',
	'Kirim Bukti Transfer via whatsapp atau telegram',
	'Kirim juga account gmail kamu ke whatsapp atau telegram',
	'Kami akan kirim link share google drive ke email kamu, hanya satu account gmail yang akan kami undang dan share untuk setiap satu order pembelian.',
  'Untuk konsultasi silahkan chat di telegram/ig : @kodingzero atau whatsapp: 08139.421.2772 / 08211.686.4468',
  'Bagi yang ingin offline via DVD, cukup tambah Rp.30.000 (belum termasuk ongkos kirim).'
];

const rekening = [
	'Bank: BANK MANDIRI',
	'No.Rek : 130-00-1439614-0',
	'Atas Nama : DIAN CAHYA PERMANA'
];

const next =[
    'Redux',
    'Node.js',
    'Express.js',
    'Mongodb/Postgre',
    'Final Fullstack Project',
    'Deploy To Cloud'
]

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
	flex-direction: row;
	justify-content: center;
`;
