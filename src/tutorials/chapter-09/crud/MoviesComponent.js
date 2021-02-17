import React, { useState, useEffect } from 'react';
import {Button,ActionButton,ButtonArea,FormArea} from './Styling';

export const FormEntry = props => {
  const initialEntry = { id: null, title: '', year: '', genre: '' };
  const [movie, setMovie] = useState(initialEntry);

  //handleOnChange untuk menangkap value tiap element input & combo
  const handleOnChange= e =>{
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!movie.title || !movie.year) return;
    console.log('genre: '+movie.genre);
    props.addMovie(movie);
    setMovie(initialEntry);
  }
 
    return (
      <>
        <h4>Add Movie</h4>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text"
            name="title"
            placeholder="Title"
            value ={movie.title}
            onChange={handleOnChange}
          />
          <input 
            type="text"
            name="year"
            placeholder="Year"
            value ={movie.year}
            onChange={handleOnChange}
          />
          <ComboBox
            name="genre"
            comboClass="combo-box"
            initialOption={movie.genre==='' ? 'Genre' : movie.genre}
            options={['War','Romance','Horror','Mystery']}
            onChange={handleOnChange}
          />
          <Button>Create</Button>
        </form>
      </>
    )
}

// edit form entry untuk menampung row current movie
export const EditFormEntry = props => {
  const [movie, setMovie] = useState([props.currentMovie]);

  useEffect(
    () => {
      setMovie(props.currentMovie)
    },[props]
  )
  

  //handleOnChange untuk menangkap value tiap element input & combo
  const handleOnChange= e =>{
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    props.updateMovie(movie.id, movie);

  }
 
    return (
      <>
        <h4>Edit Movie</h4>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text"
            name="title"
            placeholder="Title"
            value ={movie.title}
            onChange={handleOnChange}
          />
          <input 
            type="text"
            name="year"
            placeholder="Year"
            value ={movie.year}
            onChange={handleOnChange}
          />
          <ComboBox
            name="genre"
            comboClass="combo-box"
            initialOption={movie.genre==='' ? 'Genre' : movie.genre}
            options={['War','Romance','Horror','Mystery']}
            onChange={handleOnChange}
          />
          <Button>Update</Button>
          <Button onClick={() => {
            props.setEdit(false)
          }}>Cancel</Button>
        </form>
      </>
    )
} 

export const ComboBox = props=>{
  let options = props.options;
    return(<select name={props.name} value={props.initialOption}
    className={`${props.comboClass}`} onChange={props.onChange}>
    <option>{props.initialOption}</option>
      {options.map((value, index) => <option key={index}>{value}</option>)}
  </select>)
}

export const TableMovie = props => {
  return(
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
       props.movies.length > 0 ?   
        props.movies.map((movie,index)=>{
          return (<tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
            <td>
              <ButtonArea>
                <ActionButton onClick={() => {
                  props.editRow(movie)
                }}>
                  Edit
                </ActionButton>
                 <ActionButton onClick={()=>{
                   props.deleteMovie(movie.id)
                 }}>
                  Delete
                </ActionButton>
              </ButtonArea>
            </td>
          </tr>)
        }) : 
            <tr>
              <td colSpan={4}>No Records Found.</td>
        </tr>
      }
    </tbody>
  </table>)
}