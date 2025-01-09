import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../public/logo.png";

export default function HeaderLogo(){
  return(
    <Link
        href={"/"}
      >
        <Image
          src={Logo}
          alt="Page Mage Logo"
          width={100}
          height={100}
        />
      </Link>
  )
}