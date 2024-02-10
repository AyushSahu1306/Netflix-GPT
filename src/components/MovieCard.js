import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    
  return (
    <div className='w-52 md:w-72 pr-4'>
      <img alt='Movie Card' src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard