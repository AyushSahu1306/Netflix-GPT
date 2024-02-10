import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'


const GPTSearch = () => {
  return (
    <div>
      
      <div className='fixed -z-10 '>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src={BG_URL} className='h-screen md:h-full object-cover md:object-fill ' ></img>
       </div>

       <div className=''>
       <GPTSearchbar/>
       <GPTMovieSuggestions/>
       </div>
    </div>
  )
}

export default GPTSearch