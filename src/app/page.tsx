import Image from "next/image";
import Reader from "../../public/reading.svg";

export default function Home() {
  return (
    <main>
      <div className="h-20 w-auto">
        <Image
          src={Reader}
          alt="A woman reading a book"
        />
      </div>
    </main>
  );
}
