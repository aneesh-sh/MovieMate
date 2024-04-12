import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies(); 
  useUpcomingMovies();
 
  
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