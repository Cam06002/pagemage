import Image from "next/image";
import Rooms from "../../../../../public/rooms.jpeg";
import Blood from "../../../../../public/blood.jpeg";
import Stories from "../../../../../public/stories.jpeg";
import CardForm from "./cardform";


export default function ActionCards(){
  let images = [
    <Image
      src={Rooms}
      height={113}
      width={75}
      alt="Cover of 'Other Voices Other Rooms'"
    />,
    <Image
      src={Blood}
      height={113}
      width={75}
      alt="Cover of 'In Cold Blood'"
    />,<Image
    src={Stories}
    height={113}
    width={75}
    alt="Cover of 'Stories'"
  />
  ];

  return(
    <div>
      <CardForm
        title={"Explore"}
        images={images}
        descript={"Find Your Next Great Read!"}
        buttonTitle={"Search"}
      />
    </div>
  )
}