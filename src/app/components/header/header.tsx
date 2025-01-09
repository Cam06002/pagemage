import HeaderLogo from "./logo";
import SearchBar from "../search-bar/search-bar";
import LoginAvatar from "./login-avatar";

export default function Header(){
  return(
    <header>
      <HeaderLogo />
      <SearchBar />
      <LoginAvatar />
    </header>
  )
}