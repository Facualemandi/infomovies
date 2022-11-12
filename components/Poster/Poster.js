import Image from "next/image";
import React from "react";
import Simpsons from "../../assets/imges/losSimpsons.png";

const Poster = () => {
  return (
    <>
      <Image
        alt="Los Simpsons"
        src={Simpsons}
        className="w-full rounded-lg mt-4"
      />
    </>
  );
};

export default Poster;
