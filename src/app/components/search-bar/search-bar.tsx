import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar(){
  return(
    <div>
      {/*Search bar takes user input, calls GoogleAPI and navigates users to results page*/}
      <form className="flex">
        <input type="text" placeholder="search" className="w-xl h-xs flex text-black p-1 rounded-md text-sm"></input>
        <button type="submit" className="text-lg ml-1"><IoSearchSharp/></button>
      </form>
    </div>
  )
}