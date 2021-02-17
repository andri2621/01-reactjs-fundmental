import React, { Component } from 'react';
import { TodoWrap, TodoForm } from './TodoStyle';
import uuidv4 from 'uuid/v4';
import List from './List';

const listTodo = [
	{
		id: uuidv4(),
		task: 'Learn Javascript es6',
		completed: false
	},
	{
		id: uuidv4(),
		task: 'Learn React Fudamental',
		completed: false
	},
	{
		id: uuidv4(),
		task: 'Learn Redux Fudamental',
		completed: false
	},
	{
		id: uuidv4(),
		task: 'Final Project #1',
		completed: false
	}
];

export default class Todo extends Component {
	state = {
		task: '',
		items: []
	};

	componentDidMount() {
		this.setState({
			items: listTodo
		});
	}

	handleOnChange = (e) => {
		const { target: { value } } = e;
		this.setState({
			task: value
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.setState({
			task: '',
			items: [
				...this.state.items,
				{
					id: uuidv4(),
					task: this.state.task,
					completed: false
				}
			]
		});
	};

	removeTask = (id) => {
		const foundTask = this.state.items.filter((task) => task.id !== id);
		this.setState({
			items: [ ...foundTask ]
		});
	};

	markAsCompleted = (id) => {
		const foundTask = this.state.items.filter((task) => {
			if (task.id === id) {
				task.completed = true;
			}
		});

		this.setState({
			items: [ ...this.state.items, ...foundTask ]
		});
	};

	render() {
		const { items, task } = this.state;
		return (
			<TodoWrap>
				<TodoForm>
					<form onSubmit={this.handleOnSubmit}>
						<input placeholder="add task here" value={task} onChange={this.handleOnChange} />
					</form>
				</TodoForm>
				<List items={items} markAsCompleted={this.markAsCompleted} removeTask={this.removeTask} />
			</TodoWrap>
		);
	}
}
