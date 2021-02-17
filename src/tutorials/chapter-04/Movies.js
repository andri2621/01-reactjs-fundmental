import React, { Component } from 'react';
import { movieData } from './moviedata';
import './Movies.css';
import Movie from './Movie';




class Movies extends Component {
    render() {
        const moviesList = movieData.map((movie) => {

            return (
                <Movie
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                    hd={movie.video}
                    date={movie.release_date}
                />
           );
        });
        return (
            <div>
                <h3>Movies</h3>
                <div className="movies">
                    {moviesList}
                </div>
                
            </div>
        );
    }
}

export default Movies;