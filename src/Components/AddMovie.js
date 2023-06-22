import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import MovieList from './MovieList';
import Rating from '@mui/material/Rating';

function AddMovie({Data, search,value}) {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newMovie = {
      title: formData.get('title'),
      date: formData.get('date'),
      image: formData.get('image'),
      type: formData.get('type'),
      description: formData.get('description'),
      rating: formData.get('rating')
    };
    setMovies([...movies, newMovie]);
  }

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
      <Form className='add-movie' onSubmit={handleAddMovie}>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" placeholder="Enter movie image URL" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter movie Title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" name="type" placeholder="Enter movie Type" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" placeholder="Enter movie Description" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" name="date" placeholder="Enter movie Date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" name="rating" placeholder="Enter movie Rating" />
        </Form.Group>
        <button variant="primary" type="submit" style={{border:'none',}}>Add Movie</button>
      </Form>
      <MovieList  value={value} Data={Data} search={search} />
      {movies.map((movie, index) => (
        <Card style={{ width: '12rem' }}>
        <Card.Img style={{height:'270px'}} variant="top" src={movie.image} alt="404" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.type}</Card.Text>
          <Card.Text style={{fontSize:'12px'}}>
            {movie.description}
          </Card.Text>
          <Card.Text style={{fontWeight: 'bolder'}}>
            {movie.date}
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly />
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}

export default AddMovie;