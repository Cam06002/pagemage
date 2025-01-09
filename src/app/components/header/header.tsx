import HeaderLogo from "./logo";
import SearchBar from "../search-bar/search-bar";
import LoginAvatar from "./login-avatar";

export default function Header(){
  // Header needs to hold the logo, a search bar, and an account / user avatar.
  return(
    <nav>
      <HeaderLogo />
      <SearchBar />
      <LoginAvatar />
    </nav>
  )
}