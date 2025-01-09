import Image from "next/image";
import Logo from "../../../../public/logo.png";
import SearchBar from "../search-bar/search-bar";
import Link from "next/link";

export default function Header(){
  // Header needs to hold the logo, a search bar, and an account / user avatar.
  return(
    <div>
      {/*Logo, needs to link back to the home page*/}
      <Link
        href={"./"}
      >
        <Image
          src={Logo}
          alt="Page Mage Logo"
          width={100}
          height={100}
        />
      </Link>
      {/*Search bar takes user input, calls GoogleAPI and navigates users to results page*/}
      <SearchBar />
      {/*User Avatar allows user to login/register/logout */}
    </div>
  )
}