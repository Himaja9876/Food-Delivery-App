import React from 'react'
import { MdShoppingBag } from "react-icons/md";
import { motion } from 'framer-motion'

import Avatar from "../img/avatar.png"
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";  //importing our app (firebase)

const Header = () => {
    const firebaseAuth = getAuth(app); // retrieves the authentication service associated with our fore base app//gives the auth details for our app 
    console.log(firebaseAuth);
    const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);

  } 
  return (
  <header className = "fixed z-50 w-screen p-6 px-16 flex justify-between items-center">
      {/* menu for desktop and tablet */}
      <div className = "hidden md:flex w-full h-full">
        <Link to = {"/"} className = "flex items-center gap-2"> {/* if we click on logo/p, it navigates to the home page */}
          <img src = {Logo} className ="w-8 object-cover" alt= "logo" />
          <p className = "text-headingColor text-xl font-bold ">Eat Rep!t</p>
        </Link>
      </div> 
      
      <div className = "flex items-center gap-8">
        <ul className = "flex items-center gap-8 ">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" style={{ whiteSpace: 'nowrap' }} >About Us</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
        </ul>

        <div className = "relative flex items-center justify-center">
          <MdShoppingBag className="text-textColor text-2xl cursor-pointer"/>
          <div className = "absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className = "text-xs text-white font-semibold">2</p>
          </div>
        </div> 
       
        <div>
          <motion.img whileTap={{scale: 0.6}}
          src = {Avatar} className ="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer" 
          alt= "UserProfile" 
          onClick={login}/>
          
        </div>
      
      </div>

      {/*menu for mobile*/}
      <div className = "flex md:hidden w-full h-full"></div>
    
  </header>
  )
}

export default Header