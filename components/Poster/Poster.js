import Image from "next/image";
import React from "react";
import Simpsons from "../../assets/imges/losSimpsons.png";

const Poster = () => {
  return (
    <section className="relative">
      <Image
        alt="Los Simpsons"
        src={Simpsons}
        className="w-full rounded-lg mt-4"
        priority
      />
      <div className="p-1 absolute top-6 text-white">
        <h3 className="text-sm font-semibold">Bienvenidos</h3>

        <p className="text-sm mt-2 | tablet:text-base | laptop:text-xl | desktop:text-xxl">
          Millones de películas, programas de televisión y personas por
          descubrir. Explora ahora.
        </p>
      </div>
    </section>
  );
};

export default Poster;
