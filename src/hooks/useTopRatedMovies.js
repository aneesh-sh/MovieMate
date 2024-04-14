import { useEffect } from "react";
import {   addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () =>{
    //Fetch Data from TMDB API and update the store --> using cutom hook
    const dispatch = useDispatch();

  const getTopRatedMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
     API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getTopRatedMovies();
  },[])

};

export default useTopRatedMovies;