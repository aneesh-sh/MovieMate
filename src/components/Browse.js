import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header/>
      <MainConatainer/>
      <SecondaryContainer/>
      {/*
        //main conatiner
          - video background
          - video title
        secondary container
          -movie list*N
          -cards*N
      */}
    </div>
  )
}

export default Browse