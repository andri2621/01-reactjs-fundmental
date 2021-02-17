import React, { Component } from 'react';
import * as css from './MoviesStyle';
import { movieData } from '../chapter-04/moviedata';
import CardMovie from './CardMovie';
import { getGenreDesc } from './api/apiClient';
import urlHeroku from '../../config/apiURL';


class MoviesSearch extends Component {
	state = {
		movies: [],
		search: '',
		select: '',
		isSelected: false
	};

	componentDidMount() {
		this.setState({
			movies: movieData
		});
	}

	handleOnSearch = (e) => {
		this.setState({
			search: e.target.value,
			isSelected: false,
			select: ''
		});
	};

	handleOnSelect = (e) => {
		const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
		console.log(value);

		if (value !== null) {
			this.setState({
				select: value,
				isSelected: true
			});
		}
	};

	render() {
		const { movies, search, select, isSelected } = this.state;
		return (
			<css.Container>
				<h3>Movies Search</h3>
				<css.Search>
					<input placeholder="Find Movies" value={search} onChange={this.handleOnSearch} />
					<select value={select || ''} onChange={this.handleOnSelect}>
						<option value="">Filter By</option>
						<option value="rating">Rating</option>
						<option value="vote">Vote</option>
						<option value="year">Year</option>
						<option value="popularity">Popularity</option>
					</select>
				</css.Search>
				<css.Movies>
					{// gunakan ternary operation, jika
					// isSelected = true, maka aktifikan sorting filter, tapi
					// jika isSelected=false, maka kembali ke mode searching
					!isSelected ? (
						movies
							.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
							.map((movie) => {
								let genres = getGenreDesc(movie.genre_ids);
								return (
									<CardMovie
										poster={`${urlHeroku}/images/movies/${movie.poster_path}`}
										genres={genres.join(',')}
										rating={movie.vote_average}
										vote={movie.vote_count}
										popularity={Math.round(movie.popularity)}
									/>
								);
							})
					) : (
						movies
							.sort((a, b) => {
								if (select === 'rating') {
									return b.vote_average - a.vote_average;
								}
								if (select === 'vote') {
									return b.vote_count - a.vote_count;
								}
								if (select === 'year') {
									return b.year - a.year;
								}
								if (select === 'popularity') {
									return b.popularity - a.popularity;
								}
								
							})
							.map((movie) => {
								let genres = getGenreDesc(movie.genre_ids);
								return (
									<CardMovie
										poster={`${urlHeroku}/images/movies/${movie.poster_path}`}
										genres={genres.join(',')}
										rating={movie.vote_average}
										vote={movie.vote_count}
										popularity={Math.round(movie.popularity)}
									/>
								);
							})
					)}
				</css.Movies>
			</css.Container>
		);
	}
}

export default MoviesSearch;
