'use client'

import { useState } from "react";

import { RxAvatar } from "react-icons/rx";
import { FaBookReader } from "react-icons/fa";

export default function LoginAvatar(){

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const onAvatarClick = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return(
    <div>
      {/*User Avatar allows user to login/register/logout */}
      <button
        onClick={()=>onAvatarClick()}
      >
        {isLoggedIn ? <FaBookReader/> : <RxAvatar/>}
      </button>
    </div>
  )
}