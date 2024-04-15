import { BIG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img 
    className="min-h-screen object-cover"
    src={BIG_URL}
    alt="logo"/>
     </div> 
    <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearchPage;