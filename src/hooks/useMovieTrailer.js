import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    
    const dispatch =useDispatch();
    //fetch trailer videos && updating the store with trailer video data
    
    const getMovieVideos = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+
        movieId+
        '/videos?language=en-US', API_OPTIONS);//955916
        const json =await data.json();
        
        const filterdata=await json.results.filter(video=>video.type==="Trailer");
        const trailer=await  filterdata.length?filterdata[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailerVideo.key);
    }

    useEffect(()=>{
        getMovieVideos();
    },[])

}

export default useMovieTrailer