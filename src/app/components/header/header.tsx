import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function Header(){
  return(
    <div>
      <Image
        src={Logo}
        alt="Page Mage Logo"
        width={100}
        height={100}
      />
    </div>
  )
}