import Image from "next/image";
import { TiStar, TiHeart } from "react-icons/ti";

export default function Author({name, image, likes, favorites}:{name:string, image:any, likes:string, favorites:string}){
  return(
    <div className="flex flex-col justify-between align-middle h-[392px] w-[200px] mx-2 border-2 rounded-xl p-2">
      <h4 className="text-xl">{name}</h4>
      <Image
        src={image}
        height={302}
        width={200}
        alt="book cover image"
        className="rounded object-fill"
      />
      <div className="flex flex-row justify-center">
        <TiStar /><p className="ml-1 mr-4">{likes}</p>
        <TiHeart /><p className="ml-1">{favorites}</p>
      </div>
    </div>
  )
}