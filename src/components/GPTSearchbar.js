import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants'
import { addGPTMovieResult } from '../utils/GPTSlice'

const GPTSearchbar = () => {

  const langkey= useSelector(store=>store.config.lang);
  const searchtext=useRef(null);
  const dispatch=useDispatch();

  const searchMovie=async (movie)=>{
    const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json= await data.json();
    return json.results;

  }

  const handleGPTSearchClick=async ()=>{
    // console.log(searchtext.current.value)
    // Make an API call to GPT API and get Movie Results
    if(searchtext.current.value==="") return null;
    const gptQuery= "Act as a Movie Recommendation System and suggest some movies for the query"+ 
                    searchtext.current.value +
                    ". Only give me names of 5 movies, comma seperated like the example resul given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(gptResults.choices===null) {
      //error handling
    }
    const gptMovies=gptResults.choices[0]?.message?.content.split(",");
    console.log(gptMovies);

    //for each movie  i will search tmbd api


    const promisearray = gptMovies.map((movie)=>searchMovie(movie));//[promise,promise,promise,promise,promise]

    const tmbdResults= await Promise.all(promisearray);
    console.log(tmbdResults);

    dispatch(addGPTMovieResult({movieNames:gptMovies,movieResults:tmbdResults}));

  }

  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' className='p-1 md:p-4 m-4 mr-2 md:m-4 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder} ref={searchtext}></input>
            <button className='py-2 px-2 md:px-4 bg-red-700 text-white rounded-lg col-span-3 my-4 mx-2 md:m-4' onClick={handleGPTSearchClick}>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchbar