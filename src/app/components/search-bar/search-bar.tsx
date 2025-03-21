import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar(){
  return(
    <div>
      {/*Search bar takes user input, calls GoogleAPI and navigates users to results page*/}
      <form className="flex flex-row align-center">
        <input type="text" placeholder="search" className="w-80 h-xs flex text-black p-1 rounded-l-lg text-sm mr-[-1]"></input>
        <button type="submit" className="text-lg ml-1 text-black bg-white rounded-r-lg px-1 ml-[-1]"><IoSearchSharp/></button>
      </form>
    </div>
  )
}