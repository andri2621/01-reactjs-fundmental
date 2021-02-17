import React, { Component } from 'react';
import axios from 'axios';
import * as css from './InfoStyle';
import Youtube from './components/Youtube';
import { facebook, twitter, google, star, thumbsOUp, eye } from 'react-icons-kit/fa/';
import { Icon } from 'react-icons-kit';
import { getGenreDesc } from './api/apiClient';
import _ from 'lodash';
import urlHeroku from '../../config/apiURL';


class MovieInfo extends Component {
	state = {
		movies: [],
		genres: []
	};

	componentDidMount() {
		const { movieId } = this.props.match.params;
		this.loadMovieAsync(movieId);
		this.loadGenresAsync();
	}

	loadMovieAsync = async (id) => {
		try {
			const response = await axios.get(`${urlHeroku}/movieData?id=${id}`);
			//console.log(response);
			this.setState({
				movies: response.data
			});
		} catch (error) {
			console.log(error);
		}
	};

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
		const { movies, genres } = this.state;
		return (
			<css.InfoStyle>
				<h3>Movie Info Rest</h3>
				{movies.map((movie) => {
					// fill genre here
					let genre = getGenreDesc(genres, movie.genre_ids).join(',');
					return (
						<css.InfoMain>
							<css.InfoLeft>
								<Youtube video={movie.youtube_url} autoplay="0" rel="0" modest="1" />
							</css.InfoLeft>
							<css.InfoRight>
								<css.InfoTitle>
									<h3>
										{movie.title} {movie.release_date.substr(0, 4)}
									</h3>

									<div className="overview">{movie.overview}</div>
									<css.InfoButton>
										<css.Facebook>
											<span>
												<Icon size={14} icon={facebook} />
												Share
											</span>
										</css.Facebook>
										<css.Twitter>
											<span>
												<Icon size={14} icon={twitter} />
												Tweet
											</span>
										</css.Twitter>
										<css.Google>
											<span>
												<Icon size={14} icon={google} />
												Google
											</span>
										</css.Google>
									</css.InfoButton>
								</css.InfoTitle>
								<css.InfoGenre>
									<css.AkaGenre>
										<p>
											<strong>A.K.A : </strong>
											<span>{movie.original_title}</span>
										</p>
										<p>
											<strong>Language : </strong>
											<span>{movie.original_language}</span>
										</p>
										<p>
											<strong>Genres : </strong>
											<span>{genre}</span>
										</p>
									</css.AkaGenre>
									<css.RatingIcon>
										<css.Star>
											<Icon size={18} icon={star} style={{ color: '#ffa500' }} />
											<span>{movie.vote_average}</span>
										</css.Star>
										<css.Star>
											<Icon size={18} icon={thumbsOUp} style={{ color: '#ffa500' }} />
											<span>{movie.vote_count}</span>
										</css.Star>
										<css.Star>
											<Icon size={18} icon={eye} style={{ color: '#ffa500' }} />
											<span>{Math.round(movie.popularity)}</span>
										</css.Star>
									</css.RatingIcon>
								</css.InfoGenre>
								<css.InfoActor>
									{movie.actors.map((actor) => {
										return (
											<css.ActorCard>
												<div className="photo">
													<img src={`${urlHeroku}/images/roles/${actor.pic}`} alt="pic" />
												</div>
												<div className="roles">
													<div className="actors">
														<p>{actor.name}</p>
														<p>{actor.aka}</p>
													</div>
												</div>
											</css.ActorCard>
										);
									})}
								</css.InfoActor>
							</css.InfoRight>
						</css.InfoMain>
					);
				})}

				<css.ButtonBack
					onClick={() => {
						this.props.history.goBack();
					}}
				>
					Back
				</css.ButtonBack>
			</css.InfoStyle>
		);
	}
}

export default MovieInfo;
