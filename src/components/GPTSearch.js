import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'


const GPTSearch = () => {
  return (
    <div>
      
      <div className='absolute -z-10'>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src={BG_URL}></img> </div>
       <GPTSearchbar/>
       <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch