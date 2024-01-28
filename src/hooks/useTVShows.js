import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTvShows } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTVShows = () => {
    
    const dispatch =useDispatch();
    //fetch trailer videos && updating the store with trailer video data
    
    const getTvShows= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/tv/popular', API_OPTIONS);
        const json =await data.json();
        
      
        dispatch(addTvShows(json.results));
        
    }

    useEffect(()=>{
        getTvShows();
    },[])

}

export default useTVShows