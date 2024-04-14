import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {
    const langkey = useSelector(store =>store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch;
    
    // search movie in TMDB
    const searchMovieTMDB = async(movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie 
      +"&include_adult=false&language=en-US&page=1",API_OPTIONS);

      const  json = await data.json();
      return json.results; 
    }
    
    const handleGptSearchClick = async () =>{
      console.log(searchText.current.value);
      // make API call to GPT API to get  movie results

      const gptQuery = "Act as movie recommendation system and suggest some movies for the query" + 
      searchText.current.value +
     "only give me names of 5 movies, comma seperated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
      
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      
      if(!gptResults.choices){
        
      }
      //andaaz apna apna, hera pheri, chupke chupke, jane bhi do yarron, padosan
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

      //["andaaz apna apna", "hera pheri", "chupke chupke", "jane bhi do yarron", "padosan"]

      //for each movie will search in TMDB API
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)) ;
      // 5 promises

      const tmdbResults = await Promise.all(promiseArray);
      // console.log(tmdbResults);
      dispatch(addGptMovieResult({moviesNames:gptMovies,moviesResults:tmdbResults}));
    };

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input 
            ref = {searchText}
            type = 'text'
             className='p-4 m-4 col-span-9'
            placeholder={lang[langkey].gptSearchBarPlaceholder}
            />
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}>
                {lang[langkey].search}
                </button>
        </form>
    </div>
  )
}

export default GptSearchBar