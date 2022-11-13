"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMore } from "react-icons/ai";
import fetching from "../../../../fetchingData/fetching";

const Movies = () => {
  const { data: movies, status, URL_IMG } = fetching("movie", "popular");

  if (status === "loading") {
    return <p>Facargndo</p>;
  }
  const imageLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <section className="flex overflow-auto mt-3 max-w-7xl || laptop:m-auto">
      {movies.map((movie) => (
        <Link href={""} className="relative" key={movie.id}>
          <Image
            alt="Movies popular"
            loader={imageLoader}
            src={`${URL_IMG}${movie.poster_path}`}
            width={140}
            height={120}
            className="p-2 rounded-3xl w-auto h-auto"
            priority
          />
          <p className="flex text-md m-2 w-36 font-medium">{movie.title}</p>
          <p className="flex text-md m-2 w-36 text-slate-400">
            {movie.release_date || "none"}
          </p>
          <AiOutlineMore className="w-10 h-10 p-2 border rounded-full absolute top-4 right-4 bg-transparent-white" />
        </Link>
      ))}
    </section>
  );
};

export default Movies;
