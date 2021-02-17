import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import urlHeroku from '../../../config/apiURL';


const MovieHook=()=>{
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetchMovies();
  },[]);

  const fetchMovies = async()=>{
      const result = await axios.get(`${urlHeroku}/movieData`);
      setMovies(result.data);
      console.log(result.data);
    }

  return <PageWrap>
    <h3>MovieHook</h3>
    {
      movies.map ((movie)=>{
        return <li>{movie.title} #{movie.vote_average}</li>
      })
    }
  </PageWrap>
}

export default MovieHook;

const PageWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	text-transform: initial;
	margin-left: 30px;
	margin-right: 30px;
`;

const Movie = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	flex-wrap: wrap;
	margin: 0 12px 10px 10px;
`;