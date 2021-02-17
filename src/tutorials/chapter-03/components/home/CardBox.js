import React from 'react';
import styled from 'styled-components';

const CardBox = (props) => {
	return (
		<CardBoxStyle>
			<Title theme={props.theme}>
				<h3>{props.title}</h3>
			</Title>
			<Overview>
				<p>{props.overview}</p>
			</Overview>
		</CardBoxStyle>
	);
};

export default CardBox;

const CardBoxStyle = styled.div`
	display: flex;
	width: 300px;
	height: 150px;
	background-color: #ffff;
	display: flex;
	flex-direction: column;
	box-shadow: 0 2px 5px #777;
	margin: 0 3px 10px 5px;
	transition: all 0.2s ease-in-out;
	border-radius: 5px;
	:hover {
		box-shadow: 0 5px 6px #777;
		transform: translate(0, 0.1%);
		cursor: pointer;
	}
	:active {
		box-shadow: none;
	}
`;

const Title = styled.div`
	flex: 10%;
  background: ${props => props.theme};
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
  border-radius:2px;
	h3 {
		font-weight: 600;
		letter-spacing: normal;
		font-size: 18px;
		color: #fff;
		letter-spacing: 1.5px;
		margin-left: 3px;
		margin-top: 5px;
		text-align: center;
	}
`;

const Overview = styled.div`
	flex: 50%;
	width: inherit;
	p {
    margin: 0 15px 5px 15px;
		font-size: 16px;
		line-height: 19px;
    text-align:justify;
	}
`;
