import Image from "next/image"

export default function CardForm(
  title:string, images:Array<any>, descript:string, buttonTitle: string
){
  return(
    <div>
      <h3>{title}</h3>
      <div>{images}</div>
      <p>{descript}</p>
      <button>{buttonTitle}</button>
    </div>
  )
}