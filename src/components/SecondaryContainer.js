import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='pl-3 md:pl-12 mt-0 md:-mt-48 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        </div>
    </div>
    )
  )
}

export default SecondaryContainer