import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    
    const dispatch =useDispatch(); 

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    //fetch the trailer video and updating store with trailer video data
    const getMovievideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
        API_OPTIONS);    
        const json = await data.json();
       

        const filterData = json.results.filter(videos => videos.type === "Trailer")
        const trailer = filterData.length ? filterData[1] : json.results[0];
        
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=> {
        !trailerVideo && getMovievideos();
    },[]);

}

export default useMovieTrailer;