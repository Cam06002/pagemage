'use client'

import { useState } from "react";

import { RxAvatar } from "react-icons/rx";

export default function LoginAvatar(){

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const onAvatarClick = () => {

  }

  return(
    <div>
      {/*User Avatar allows user to login/register/logout */}
      <button>
        <RxAvatar />
      </button>
    </div>
  )
}