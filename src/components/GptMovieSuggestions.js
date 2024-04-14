import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const {moviesNames, moviesResults}  = useSelector(store => store.gpt);
  if(!moviesNames) return null;
  
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {moviesNames.map((moviesNames,index) => 
        < MovieList 
         key={moviesNames}
        title = {moviesNames} 
        movies = {moviesResults[index]} 
        />)}

        
      </div>

    </div>
  )
}

export default GptMovieSuggestions