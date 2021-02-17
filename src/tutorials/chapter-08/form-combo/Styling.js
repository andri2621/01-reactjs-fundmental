import styled from 'styled-components';


export const PageWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	justify-content: flex-start;
	align-items: center;
	text-transform: initial;

	select {
		border-radius: 3px;
		border: 2px solid gray;
		font-size: 12px;
		width: 100%;
		height: 38px;
		padding: 10px;
		box-sizing: border-box;
		margin-top:15px;
	}

	.spinner{
		display:flex;
		justify-content:center;
		justify-items:center;
		margin-top: 15px;
	}

	.hide{
		visibility:hidden;
	}

`;


export const Button = styled.button`
	position: relative;
	width: 100px;
	height: 30px;
	display: block;
	margin: 10px auto;
	padding: 0;
	overflow: hidden;
	border-width: 0;
	outline: none;
	border-radius: 2px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
	background-color: #2ecc71;
	color: #ecf0f1;
	transition: background-color .3s;
	:hover,
	:focus {
		background-color: #27ae60;
		cursor: pointer;
	}
	:active {
		box-shadow: none;
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transform: scale(0.98);
		transform: scale(0.98);
	}
	span {
		display: block;
		padding: 12px 24px;
	}
`;