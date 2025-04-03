export default function CardForm(
  {title, images, descript, buttonTitle}:
  {title:string, images:Array<any>, descript:string, buttonTitle: string}
){
  return(
    <div className="flex flex-col w-[275px] h-[412px] justify-between border-2 border-white justify-items-center rounded p-2 rounded-xl mx-2">
      <h3 className="text-center text-3xl">{title}</h3>
      <div className="flex flex-row justify-center">{images}</div>
      <p className="text-center">{descript}</p>
      <div className="flex flex-row justify-center">
        <button className="bg-[#5FFF5F] rounded-xl px-4 py-1 text-[#1e1e1e]">{buttonTitle}</button>
      </div>
    </div>
  )
}