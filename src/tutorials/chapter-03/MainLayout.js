import React, { Component } from 'react';
import './MainLayout.css';
import AppNavbar from './components/layout/AppNavbar';
import Sidebar from './components/layout/Sidebar';
import Home from './Home';
import Footer from './components/layout/Footer';
import { sidemenus } from './Routing';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import CounterArrow from './../chapter-02/CounterArrow';
import List from './pages/List';
import Crud from './pages/crud';
import Error404 from './pages/Error404';
import Movies from './../chapter-04/Movies';
import RatingList from './../chapter-05/RatingList';
import MoviesSearch from './../chapter-06/Movies';
import MoviesRest from './../chapter-07/Movies';
import MovieInfo from './../chapter-07/MovieInfo';
import Forms08 from './../chapter-08/Forms08';
import Forms09 from './../chapter-09/Forms09';
import MovieResult from './components/search/MovieResult';




class MainLayout extends Component {
	render() {
		return (
			<div className="container">
				<AppNavbar />
				<Sidebar menuzero={sidemenus} />
				<div className="main-content">
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} exact />
						<Route path="/counter" component={CounterArrow} exact />
						<Route path="/list" component={List} exact />
						<Route path="/crud" component={Crud} exact />
						<Route path="/movies" component={Movies} exact />
						<Route path="/rating" component={RatingList} exact />
						<Route path="/search" component={MoviesSearch} exact />
						<Route path="/rest" component={MoviesRest} exact />
						<Route path="/rest/:movieId" component={MovieInfo} exact />
						<Route path="/searchMovie/:search" component={MovieResult} exact />
						<Route path="/forms" component={Forms08} exact />
						<Route path="/hook" component={Forms09} exact />
						<Route component={Error404} exact />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

export default MainLayout;
