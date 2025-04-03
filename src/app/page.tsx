import Image from "next/image";
import Reader from "../../public/reading.svg";
import Signup from "./components/signup/signup";
import ActionCards from "./components/guest/cards/action-cards";
import AuthorCard from "./components/guest/cards/author-cards";

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
        <Signup />
        <ActionCards />
        <AuthorCard />
      </div>
    </main>
  );
}
