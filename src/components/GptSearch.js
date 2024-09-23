import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetion from './GptMovieSuggetion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
            <img className='h-screen object-cover md:w-screen' src={BG_URL} alt="login-bg" />
      </div>
    
    <div className=''>
        <GptSearchBar />
        <GptMovieSuggetion />
    </div>
    </>
  )
}

export default GptSearch