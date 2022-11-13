"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMore } from "react-icons/ai";
import fetching from "../../../../fetchingData/fetching";

const TvShow = () => {
  const { data: tv, status, URL_IMG } = fetching("tv", "popular");

  if (status === "loading") {
    return <p>Facargndo</p>;
  }


  const imageLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <section className="flex overflow-auto mt-3 max-w-7xl || laptop:m-auto">
      {tv.map((tv) => (
        <Link href={""} className="relative" key={tv.id}>
          <Image
            alt="Tv Shows"
            loader={imageLoader}
            src={`${URL_IMG}${tv.poster_path}`}
            width={140}
            height={120}
            className="p-2 rounded-3xl w-auto h-auto"
            priority
          />
          <p className="flex text-md m-2 w-36 font-medium">{tv.original_name || tv.name}</p>
          <p className="flex text-md m-2 w-36 text-slate-400">{tv.first_air_date || "none"}</p>
          <AiOutlineMore className="w-10 h-10 p-2 border rounded-full absolute top-4 right-4 bg-transparent-white" />
        </Link>
      ))}
    </section>
  );
};

export default TvShow;
