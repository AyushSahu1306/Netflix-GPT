import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);

  if(movies.nowPlayingMovies===null) return null;
  if(movies.popularMovies===null) return null;
  if(movies.topRated===null) return null;
  if(movies.upcomingMovies===null) return null;
  if(movies.tvShows===null) return null;

  return (
    <div className=' bg-black' >

      <div className='scroll -mx-10 mt-0 md:-mt-64 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"TV Shows"} movies={movies.tvShows}/>
      </div>

    </div>
  )
}

export default SecondaryContainer;