import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from "../utils/moviesSlice"
const useNowPlayingMovies = ()=>{
    const dispatch=useDispatch();

    const nowPlayingMovies= useSelector(store=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies= async()=> {
      const data=await fetch(
       'https://api.themoviedb.org/3/movie/now_playing',
        API_OPTIONS
        );
       const json=await data.json();
      //  console.log(json);
       dispatch(addNowPlayingMovies(json.results));
    }
   
    useEffect(()=>{
      if(!nowPlayingMovies) getNowPlayingMovies();//this if condition to stop again and again api fetch
    },[])
}

export default useNowPlayingMovies