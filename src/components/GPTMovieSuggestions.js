import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GPTMovieSuggestions = () => {

  const gpt=useSelector((store)=>store.GPT);
  const {movieResults,movieNames}=gpt;

  if(!movieNames)  return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
    {movieNames.map((movie,index)=>(
      <MovieList 
        key={movie} 
        title={movie} 
        movies={movieResults[index].filter(movie=>movie.backdrop_path!=null)}/>))}
     
      </div>
    </div>
  )
}

export default GPTMovieSuggestions