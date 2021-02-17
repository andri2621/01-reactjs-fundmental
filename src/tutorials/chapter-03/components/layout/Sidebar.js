import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = props => {
    const { menuzero } = props;
	return (
		<div className="nav-side">
			<ul>
                {menuzero.map((data, index) => {
					return (
						<Link key={index} to={data.path} className="nav-side-link">
							#{data.id} - {data.name}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
