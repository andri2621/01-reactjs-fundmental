import React, { Component } from 'react';
import { movieData } from './../chapter-04/moviedata';
import Rating from './Rating';
import './Rating.css';
import urlHeroku from '../../config/apiURL';


class RatingList extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		this.setState({
			movies: movieData
		});
	}

	handleOnVote = (movieId) => {
		console.log('handle onVote : ' + movieId);
		this.setState({
			movies: [
				...this.state.movies.map((movie) => {
					if (movieId === movie.id) {
						movie.vote_count = movie.vote_count + 100;
						return movie;
					} else {
						return movie;
					}
				})
			]
		});
	};

	handleLike = (movieId) => {
		console.log('handle Like : ' + movieId);
		this.setState({
			movies: [
				...this.state.movies.map((movie) => {
					if (movieId === movie.id) {
						movie.popularity = movie.popularity + 1;
						return movie;
					} else {
						return movie;
					}
				})
			]
		});
	};

	render() {
		return (
			<div>
				<h3>Rating Popular Movies</h3>
				{this.state.movies.sort((a, b) => b.vote_count - a.vote_count).map((movie) => {
					return (
						<Rating
							id={movie.id}
							poster={`${urlHeroku}/images/movies/${movie.poster_path}`}
							title={movie.title}
							overview={movie.overview}
							rating={movie.vote_average}
							popularity={movie.popularity}
							vote_count={movie.vote_count}
							onLike={this.handleLike}
							onVote={this.handleOnVote}
						/>
					);
				})}
			</div>
		);
	}
}

export default RatingList;
