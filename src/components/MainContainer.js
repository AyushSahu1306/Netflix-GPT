import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies=useSelector((store)=>store?.movies?.nowPlayingMovies);

   
    if(movies===null) return null;

    const mainMovie=movies[0];
    
    if(mainMovie===null) return;
    
    const {original_title,overview,id}=mainMovie;
    console.log(id);

  return (
    <div className='pt-[40%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer