import React, { Component } from 'react'
import CardMovie from '../../../chapter-06/CardMovie';
import axios from 'axios';
import { getGenreDesc } from '../../../chapter-07/api/apiClient';
import urlHeroku from '../../../../config/apiURL';


export default class MovieResult extends Component {
  state = {
    movieTitle: '',
    movies:[],
    genres:[]
  }
  
  componentDidMount() {
    const { search } = this.props.match.params;  
    console.log('search :' + search);
    this.setState({ movieTitle: search });
  }

  componentWillReceiveProps(update) {
    const { search } = update.match.params;
    console.log(update);
    this.setState({
      movieTitle: search
    });
    this.loadMovieAsync(search);
		this.loadGenresAsync();
  }
  
  // #2 kita akan gunakaan axios with async
	loadMovieAsync = async (title) => {
		try {
			const response = await axios.get(`${urlHeroku}/movieData?title_like=${title}`);
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
  
  render() {
    const { movies,genres } = this.state;
    return (<div>
      <h3>Movie Result : {this.state.movieTitle}</h3>
      {
        movies
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
      }
    </div>)
  }

 }