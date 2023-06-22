import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = ({search,value}) => {
  const Data = useSelector((state)=>state.Data);
  return (
    <div id="movies" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
    {Data.filter(item =>item.name.toLowerCase().includes(search.toLowerCase().trim()) && item.rating >= value).map(el =><MovieCard key={Math.random()} el={el}/>)};
    
    </div>
  )
}

export default MovieList