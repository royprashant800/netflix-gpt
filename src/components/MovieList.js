import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    

  return (
    <div className='px-6 '>
        <h1 className='text-2xl text-white py-2'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            <div className='flex'>
                {movies?.map((movie) => (
                    <MovieCard key={movie.key} posterPath={movie.poster_path} /> 
                 ))}                
            </div>
        </div>
    </div>
  )
}

export default MovieList