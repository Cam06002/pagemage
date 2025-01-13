'use client'

import { createContext, useState} from "react";

export type UserContext = {
  login: (event: any) => void,
  logout: (event: any) => void,
  isLoggedIn: boolean,
};

export const UserContext = createContext<UserContext | null>(null);

export function UserProvider({children}:{children: any}){
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (event: any) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget)
    const username = formData.get('userName')?.toString();
    const password = formData.get('password')?.toString();

    if(username&&password){setIsLoggedIn(true);}
  }

  const logout = (event: any) => {
    event.preventDefault();
    setIsLoggedIn(false);
  }

  return <UserContext.Provider value={{
    login,
    logout,
    isLoggedIn
  }}>{children}</UserContext.Provider>
}