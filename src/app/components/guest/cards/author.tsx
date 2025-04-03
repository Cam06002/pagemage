import Image from "next/image";
import { TiStar, TiHeart } from "react-icons/ti";

export default function Author({image, likes, favorites}:{image:any, likes:string, favorites:string}){
  return(
    <div className="flex flex-col justify-center align-middle">
      <Image
        src={image}
        height={302}
        width={200}
        alt="book cover image"
      />
      <div className="flex flex-row justify-center">
        <TiStar /><p className="ml-1 mr-4">{likes}</p>
        <TiHeart /><p className="ml-1">{favorites}</p>
      </div>
    </div>
  )
}