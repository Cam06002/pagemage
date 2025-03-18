import HeaderLogo from "./logo";
import SearchBar from "../search-bar/search-bar";
import LoginAvatar from "./login-avatar";

export default function Header(){
  return(
    <header className="flex flex-row justify-between p-4 items-center h-max">
      <HeaderLogo />
      <SearchBar />
      <LoginAvatar />
    </header>
  )
}