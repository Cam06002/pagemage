import HeaderLogo from "./logo";
import SearchBar from "../search-bar/search-bar";
import LoginAvatar from "./login-avatar";

export default function Header(){
  return(
    <header className="flex flex-row justify-between p-2">
      <HeaderLogo />
      <SearchBar />
      <LoginAvatar />
    </header>
  )
}