import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate";

const Login = () => {
const [isSignInForm,setisSignInForm] = useState(true);
const [errorMessage,setErrorMessage ] = useState(null);

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const toggleSignIn = () =>{
setisSignInForm(!isSignInForm);
};

const handlebuttonClick = () =>{
// validate Form
// console.log(email.current.value)
const message = checkValidateData(email.current.value,password.current.value,name.current.value);
setErrorMessage(message);
}

  return (
    <div className="">
      <Header/>
      <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"/>
      </div>
      <form 
      onSubmit={(e)=> e.preventDefault()}
      className=" w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
           {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
       
       <input 
       ref={name}
        type="text" 
        placeholder="Full Name"
        className="p-4 my-4 w-full bg-gray-900"
        />
      )}
        <input 
        ref={email}
        type="text" 
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-900"
        />
        <input 
        ref={password}
        type="password" 
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-900"
        />
        <p className=" py-2 text-red-600 font-bold text-lg">{errorMessage}</p>
        <button 
        className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick ={handlebuttonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignIn}>
        {isSignInForm ? "New To App? Sign Up Now" : "Already registered? Sign In  Now.."}
           
          </p>
      </form>
    </div>
  )
}
  
export default Login