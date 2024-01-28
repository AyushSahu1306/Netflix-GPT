import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTopRated} from "../utils/moviesSlice"
const useTopRated = ()=>{
    const dispatch=useDispatch();
   
    const getTopRated= async()=> {
      const data=await fetch(
       'https://api.themoviedb.org/3/movie/top_rated',
        API_OPTIONS
        );
       const json=await data.json();
    //    console.log("hello");
       dispatch(addTopRated(json.results));
    }
   
    useEffect(()=>{
        getTopRated();
    },[])
}

export default useTopRated;