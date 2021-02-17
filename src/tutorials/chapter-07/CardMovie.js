import React, { Component } from 'react';
import * as css from './MoviesStyle';
import { Icon } from 'react-icons-kit';
import { star, thumbsOUp, eye } from 'react-icons-kit/fa/';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class CardMovie extends Component {
	static propTypes = {
		movieId : PropTypes.number
	}

	state = {
		loading: true
	};

	showPoster = () => {
		if (this.state.loading) {
			setTimeout(() => {
				this.setState({
					loading: false
				})
			}, 1000);
			return <div style={{position:"relative",marginTop:"50px",marginLeft:"60px"}} >			
			<ClipLoader sizeUnit={'px'} size={30}
					color={'#065535'} loading={this.state.loading} />
			</div>
		} else {
			return <img src={this.props.poster} alt="poster" />
		}
	}

	render() {
		return (
			<css.Card>
				<Link to={`/rest/${this.props.movieId}`} key={this.props.movieId}>
				<css.BoxPoster>
					{this.showPoster()}
				</css.BoxPoster>
				<css.BoxGenre>
					<css.Genre>
						<p>{this.props.genres}</p>
					</css.Genre>
					<css.IconGroup>
						<span>
								<Icon size={18} icon={star} style={{ color:'#ffd700' }} />
							<span>{this.props.rating}</span>
						</span>
						<span>
							<Icon size={18} icon={thumbsOUp} style={{ color: '#133337' }} />
							<span>{this.props.vote}</span>
						</span>
						<span>
							<Icon size={18} icon={eye} style={{ color: '#ff7373' }} />
							<span>{this.props.popularity}</span>
						</span>
					</css.IconGroup>
			</css.BoxGenre>
			</Link>
			</css.Card>
		);
	}
}

export default CardMovie;
