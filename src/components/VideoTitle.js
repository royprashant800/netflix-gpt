import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-2 md:0'>
            <button className='bg-white text-black font-bold py-1 md:py-3 px-3 md:px-10 text-xl rounded-md hover:bg-opacity-80'>▷ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-400 text-white p-3 px-10 text-xl bg-opacity-50 rounded-md'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle