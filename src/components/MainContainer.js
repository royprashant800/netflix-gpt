import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackgound from './VideoBackgound'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log("hiiii");
    
    console.log(mainMovie);
    

  return (
    <div>
        <VideoTitle />
        <VideoBackgound />
    </div>
  )
}

export default MainContainer