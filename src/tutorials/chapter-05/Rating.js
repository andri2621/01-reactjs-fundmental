import React from 'react';
import './Rating.css';
import { Icon } from 'react-icons-kit';
import { star,  thumbsOUp, heart } from 'react-icons-kit/fa/';

const Rating = (props) => {
    


	return (
		<div className="top-popular">
			<div className="poster">
				<img src={props.poster} alt="poster" />
			</div>
			<div className="description">
				<div className="title-rating">
					<h2>{props.title}</h2>
					<p>{props.overview}</p>
				</div>
				<div className="vote">
					<span style={{color: "#fff68f",opacity: .5}}>
						<Icon size={18} icon={star} />
						<span>{props.rating}</span>
					</span>
                    <span style={{ color: "#fff68f", opacity: .5 }}>
                        <a onClick={()=>props.onLike(props.id)}><Icon size={18} icon={heart} /> </a> 
						<span>{Math.round(props.popularity)}</span>
					</span>
                    <span style={{ color: "#fff68f", opacity: .5 }}>
						<a onClick={()=>{props.onVote(props.id)}}><Icon size={18} icon={thumbsOUp} /></a>
						<span>{props.vote_count}</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Rating;
