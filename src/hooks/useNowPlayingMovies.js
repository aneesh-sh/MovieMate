import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () =>{
    //Fetch Data from TMDB API and update the store --> using cutom hook
    const dispatch = useDispatch();

  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
     API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])

};

export default useNowPlayingMovies;