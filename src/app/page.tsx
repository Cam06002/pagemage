import Image from "next/image";
import Reader from "../../public/reading.svg";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center flex-col text-center mt-12">
        <Image
          src={Reader}
          alt="A woman reading a book"
          className="h-80 w-auto invert scale-x-[-1]"
        />
        <h1 className="text-5xl underline decoration-[0.5px] underline-offset-[12px]">There's Magic to Discover</h1>
      </div>
      {/*add signup button here*/}
    </main>
  );
}
