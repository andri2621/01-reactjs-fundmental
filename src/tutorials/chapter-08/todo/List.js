import React from 'react';
import { Icon } from 'react-icons-kit';
import { check, trash } from 'react-icons-kit/fa/';
import { TodoUl } from './TodoStyle';

const List = (props) => {
	const { items, markAsCompleted, removeTask } = props;

	return (
		<TodoUl>
			{items.map((item, key) => {
				return (
					<li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
						{item.task}
						<div className="actions">
							<span
								className={`${item.completed ? 'hide' : 'done'}`}
								onClick={() => markAsCompleted(item.id)}
							>
								<Icon size={14} icon={check} />
							</span>
							<span className="trash" onClick={() => removeTask(item.id)}>
								<Icon size={14} icon={trash} />
							</span>
						</div>
					</li>
				);
			})}
		</TodoUl>
	);
};

export default List;
