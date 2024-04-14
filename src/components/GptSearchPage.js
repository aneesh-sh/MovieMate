import { BIG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img 
        src={BIG_URL}
        alt="logo"/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;