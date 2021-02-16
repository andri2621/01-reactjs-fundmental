import React from 'react';
import { star, play } from 'react-icons-kit/fa/';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import '../styles/Movie.css';



const Movie = props => {
   //const {title,poster_path,release_date,vote_average,video} = props;
    
   return (
    <div className="card" style={{ backgroundImage: `url(../assets/images/movies/${props.poster})` }}>
        <Link to="/movies">
            <div>
                <div>
                    <span className="quality">{props.rating === 0 ? 'Trailer' : (props.hd===false?'CAM':'HD')}</span>
                </div>
                <div className="rating-star">
                    <span style={{ width: 18, height: 18, color: '#ffd700' }}>
                        <Icon icon={star} />
                    </span>
                    <span className="rating">{props.rating}</span>
                </div>
            </div>
            <div className="title">
                <span style={{ color: '#fff68f', opacity: 0.5 }}>
                    <Icon size={64} icon={play} />
                </span>
                {props.title} ({props.date.substr(0,4)})
            </div>
        </Link>
    </div>
   )
}


export default Movie
