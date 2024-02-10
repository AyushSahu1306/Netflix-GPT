import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute -left-14 md:left-0  text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold '>{title.toUpperCase()}</h1>
        <p className='py-6 text-lg w-2/5 hidden md:inline-block'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black px-2 md:p-4 md:px-8 text-2xl rounded-lg hover:bg-opacity-80'>Play</button>
            
            <button className='mx-2 bg-gray-500 text-white p-4 px-6 text-2xl bg-opacity-50 rounded-lg hidden md:inline-block'>More info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle