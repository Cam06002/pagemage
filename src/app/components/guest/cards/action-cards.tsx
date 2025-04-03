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
      className="mx-2"
    />,<Image
    src={Stories}
    height={113}
    width={75}
    alt="Cover of 'Stories'"
  />
  ];

  return(
    <div className="flex flex-row justify-center my-10">
      <CardForm
        title={"Explore"}
        images={images}
        descript={"Find Your Next Great Read!"}
        buttonTitle={"Search"}
      />
      <CardForm
        title={"Review"}
        images={images}
        descript={"Rate and Review Your Reads!"}
        buttonTitle={"Top Reviews"}
      />
      <CardForm
        title={"Track"}
        images={images}
        descript={"Track and Manage Your Reading Activity With Logs and Lists!"}
        buttonTitle={"Top Lists"}
      />
      <CardForm
        title={"Discuss"}
        images={images}
        descript={"Share and Discuss Your Favorite Books and Authors!"}
        buttonTitle={"Top Discussions"}
      />
    </div>
  )
}