import Allende from "../../../../../public/Allende.webp";
import Capote from "../../../../../public/capote.jpg";
import Huxley from "../../../../../public/huxley.jpg";
import GM from "../../../../../public/gm.webp";

import Author from "./author";

export default function AuthorCard(){
  return(
    <div className="flex flex-col align-middle h-full mt-12">
      <h3 className="text-3xl underline decoration-[0.5px] underline-offset-[12px] mb-8">Popular Authors</h3>
      <div className="flex flex-row justify-center">
        <Author
          name="Isabel Allende"
          image={Allende}
          likes="4.67"
          favorites="2,475"
        />
        <Author
          name="Truman Capote"
          image={Capote}
          likes="4.67"
          favorites="2,475"
        />
        <Author
          name="Aldous Huxley"
          image={Huxley}
          likes="4.67"
          favorites="2,475"
        />
        <Author
          name="Gabriel Garcia Marquez"
          image={GM}
          likes="4.67"
          favorites="2,475"
        />
      </div>
    </div>
  )
}