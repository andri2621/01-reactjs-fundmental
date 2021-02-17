import React from 'react';
import Tabs from './components/Tabs';
import './components/styles.css';
import Todo from './todo/Todo';
import SimpleForm from './simple-form/SimpleForm';
import FormCombo from './form-combo/FormCombo';
import { Form08 } from './components/FormStyle';


const Forms08 = () => {
	return (
		<Form08>
			<Tabs>
				<div label="Todo">
					<Todo />
				</div>
				<div label="Simple Form">
					<SimpleForm />
				</div>
				<div label="Select Dependency">
					<FormCombo/>
				</div>
			</Tabs>
		</Form08>
	);
};

export default Forms08;
