import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store =>store.user)
  const dispatch = useDispatch();
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid , email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      // UNSUBSCRIBE  when we unmount component
      return () => unsubscribe();
},[])

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" 
        src={LOGO_URL}
        alt="logo"/>
    {user && 
    <div className="flex p-2">
      <img
      className="w-12 h-12"
      alt="user icon"
      src={user?.photoURL}
      />
      <button onClick={handleSignOut } className="font-bold text-white">(Sign Out)</button>
    </div>
}
    </div>

  )
}

export default Header