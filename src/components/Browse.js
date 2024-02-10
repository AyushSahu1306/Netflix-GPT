import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTVShows from '../hooks/useTVShows';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGPTSearch=useSelector(store=>store.GPT.showGPTSearch);

  // Fetch data from TMBD API and update Store

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTVShows();
  return (
    <div>
      <Header/>
      {showGPTSearch?<GPTSearch/>:<>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      
     
    </div>
  )
}

export default Browse;