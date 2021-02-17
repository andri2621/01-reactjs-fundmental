import React, { Component } from 'react';
import * as css from './MoviesStyle';
import CardMovie from './CardMovie';
import axios from 'axios';
import { getGenreDesc } from './api/apiClient';
import _ from 'lodash';
import urlHeroku from '../../config/apiURL';


class MoviesRest extends Component {
	state = {
		movies: [],
		genres: [],
		search: '',
		select: '',
		isSelected: false
	};

	componentDidMount() {
		this.loadMovieAsync();
		this.loadGenresAsync();
		/* this.setState({
			movies: movieData
		}); */
	}

	//#1. kita akan gunakan axios sync
	loadMovieSync = () => {
		axios.get(`{urlHeroku}/movieData`).then((res) => {
			const movieData = res.data;
			this.setState({
				movies: movieData
			});
		});
	};

	// #2 kita akan gunakaan axios with async
	loadMovieAsync = async () => {
		try {
			const response = await axios.get(`${urlHeroku}/movieData`);
			//console.log(response);
			this.setState({
				movies: response.data
			});
		} catch (error) {
			console.log(error);
		}
	};

	// #3 load genre dari rest api
	loadGenresAsync = async () => {
		try {
			const response = await axios.get(`${urlHeroku}/genre`);
			//console.log(response.data);
			this.setState({
				genres: response.data
			});
		} catch (error) {
			console.log(error);
		}
	};

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
		const { movies, search, select, isSelected, genres } = this.state;
		return (
			<css.Container>
				<h3>Movies Search by Rest API</h3>
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
								let genre = getGenreDesc(genres, movie.genre_ids);
								return (
									<CardMovie
										movieId={movie.id}
										poster={`${urlHeroku}/images/movies/${movie.poster_path}`}
										genres={genre.join(',')}
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
								let genre = getGenreDesc(genres, movie.genre_ids);
								return (
									<CardMovie
										movieId={movie.id}
										poster={`${urlHeroku}/images/movies/${movie.poster_path}`}
										genres={genre.join(',')}
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

export default MoviesRest;
