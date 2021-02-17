import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './../search/SearchForm';
import urlHeroku from '../../../../config/apiURL';


const AppNavbar = () => {
	return (
		<div className="nav-top">
			<ul>
				<Link to="/" className="nav-top-logo">
					<img className="nav-top-img" src={`${urlHeroku}/images/kodingzero.png`} alt="koding" />
				</Link>
				<Link to="/" className="nav-top-link">
					Home
				</Link>
				<Link to="/about" className="nav-top-link">
					Order Pembelian
				</Link>
				<span>
					<SearchForm/>
				</span>
			</ul>
		</div>
	);
};
export default (AppNavbar);
