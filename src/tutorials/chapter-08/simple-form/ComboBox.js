import React from 'react';


const ComboBox = (props) => {
	let options = props.options;

	return <select className={`${props.comboClass}`} onChange={props.roleOnChange}>
		<option>{props.initialOption}</option>
		{options.map((value,index)=> 
			<option key={index}>{value}</option>)}
	</select>;
};



export default ComboBox;
