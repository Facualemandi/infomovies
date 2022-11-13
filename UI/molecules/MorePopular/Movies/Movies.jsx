"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { helpHttp } from "../../../../helper/helpHttps";
import Image from 'next/image';

const Movies = () => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=2d8e5782ecf8c4633c8300fed87c468d&page=1";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const getPopularMovies = async () => {
    const res = await Promise.all([helpHttp().get(URL)]);
    return res[0].results;
  };

  const { data: movies, status } = useQuery(["Movies"], getPopularMovies);

  if (status === "loading") {
    return <p>Facargando</p>;
  } else {
    console.log(movies);
  }


  const imageLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <section>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Image
              alt={movie.title}
              loader={imageLoader}
              src={`${URL_IMAGE}${movie.poster_path}`}
              width="500"
              height="500"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Movies;
