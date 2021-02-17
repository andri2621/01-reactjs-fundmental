import styled from 'styled-components';

const TodoWrap = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #e6e6fa;
	border-radius: 4px;
	margin: 1px auto;
	min-height: 20px;
	padding: 10px;
	text-align: left;
	width: 70%;
`;

const TodoForm = styled.form`
	margin: 5px 20px;
	text-align: center;
	input {
		background-color: #fff;
		border-radius: 4px;
		border: 1px solid #ccc;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		color: #555;
		font-size: 14px;
		height: 34px;
		line-height: 12px;
	}
`;
const TodoUl = styled.ul`
	width: 100%;
	margin: 20px 20px;
	padding: 0;
	list-style: none;

	li {
		background-color: #ffffff;
		border: 1px solid #ddd;
		display: flex;
		justify-content: space-between;
		margin-bottom: -1px;
		padding: 10px 15px;
		text-transform: initial;

		.hide {
			visibility: hidden;
		}

		.actions {
			display: flex;
			justify-content: space-between;
			width: 40px;
		}

		.done {
			color: #79c41d;
			display: block;
		}

		.trash {
			color: #c41d1d;
			display: block;
		}

		span {
			cursor: pointer;
		}
	}
	.completed {
		background-color: #b3cde0;
		font-size: 16px;
	}
`;

export { TodoWrap, TodoForm, TodoUl };
