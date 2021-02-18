import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import { PageWrap, ContentArea, FormArea, TableArea } from './Styling';
import { TableMovie, FormEntry,EditFormEntry } from './MoviesComponent';

const MoviesCrud = () => {
	const initialMovie=[{id: null,title:'',year:'',genre:''}]
	const [movies, setMovies] = useState(MovieData);
	const [currentMovie, setCurrentMovie] = useState(initialMovie);
	const [edit, setEdit] = useState(false);

	// start crud
	const addMovie = (movie) => {
		movie.id = uuidv4();
		setMovies([...movies, movie]);
	};

	const updateMovie = (id, updateMovie) => {
		setEdit(false);
		setMovies(movies.map(movie => (movie.id === id) ?
			updateMovie : movie));
	}

	const editRow = (movie) => {
		setEdit(true);
		setCurrentMovie({
			id: movie.id, title: movie.title, year: movie.year,
			genre: movie.genre
		});
	}

	const deleteMovie = (id) => {
		setEdit(false);
		setMovies(movies.filter(movie => movie.id !== id ))
	}
	
	// end crud

	return (
		<PageWrap>
			<ContentArea>
				<FormArea>
					{edit ? <EditFormEntry
						setEdit={setEdit}
						updateMovie={updateMovie}
						currentMovie={currentMovie} /> :
					<FormEntry addMovie={addMovie} />}
				</FormArea>
				<TableArea>
					<TableMovie movies={movies} editRow={editRow}
						deleteMovie={deleteMovie}
					/>
				</TableArea>
			</ContentArea>
		</PageWrap>
	);
};

export default MoviesCrud;

const MovieData = [
	{
		id: uuidv4(),
		title: 'Alita: Battle Angel',
		year: 2018,
		genre: 'Action'
	},
	{
		id: uuidv4(),
		title: 'Glass',
		year: 2018,
		genre: 'Mysteri'
	},
	{
		id: uuidv4(),
		title: 'Captain Marvel',
		year: 2019,
		genre: 'Sci-Fiction'
	}
];
