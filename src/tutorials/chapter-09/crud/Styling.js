import styled from 'styled-components';

export const PageWrap = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-transform: initial;
`;

export const ContentArea = styled.div`
	flex: 100%;
	display: flex;
	flex-direction: row;
	width: 100%;
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
	background-color: #468499;
	color: #ecf0f1;
	transition: background-color .3s;
	:hover,
	:focus {
		background-color: #6897bb;
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

export const ActionButton = styled(Button)`
  width: 80px;
  margin: 5px;
      margin-bottom: 0!important;
    margin-right: .5rem;
`;

export const ButtonArea = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const FormArea = styled.div`
	flex: 35%;
	height: 100%;
	width: 100%;
	background-color: #ffffff;
	border-radius: 0.5em;
	box-shadow: 0.1em 0.1em 0.5em #124;
	border-right-style: outset;

	h4 {
		text-align: center;
		align-items: center;
		border-bottom-style: inset;
		padding-left: 15px;
		padding-bottom: 5px;
	}
	form {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		justify-content: flex-start;
		align-items: center;
		input {
			border-radius: 3px;
			border: 2px solid gray;
			width: 50%;
			height: 38px;
			margin-top: 5px;
			padding-left: 10px;
			padding-right: 10px;
			box-sizing: border-box;
			font-size: 12px;
		}
		.combo-box {
			border-radius: 3px;
			border: 2px solid gray;
			font-size: 12px;
			width: 50%;
			height: 38px;
			padding: 10px;
			box-sizing: border-box;
			margin-top: 5px;
		}
	}
`;

export const TableArea = styled.div`
	flex: 65%;
	display: flex;
	background-color: #ffffff;
	border-radius: 0.5em;
	box-shadow: 0.1em 0.1em 0.5em #124;
	border-left-style: outset;
	table {
		display: table;
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		max-width: 100%;
		margin: 10px 0 1.5rem 0;

		thead {
			display: table-header-group;
			vertical-align: middle;
			border-color: inherit;
			tr {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
				thead th {
					border-bottom: 2px solid #dedede;
				}
				th,
				td {
					text-align: left;
					padding: .5rem;
				}
			}
		}

		tbody {
			display: table-row-group;
			vertical-align: middle;
			border-color: inherit;
			tr {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
				th,
				td {
					text-align: left;
					padding: .5rem;
				}

				td {
					border-bottom: 1px solid #dedede;
				}
			}
		}
	}
`;