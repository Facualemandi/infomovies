import { helpHttp } from "../helper/helpHttps";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetching = (type, value) => {
  const URL = `https://api.themoviedb.org/3/${type}/${value}?api_key=2d8e5782ecf8c4633c8300fed87c468d&page=1`;
  const URL_IMG = "https://image.tmdb.org/t/p/w500";

  const getPopular = async () => {
    const res = await Promise.all([helpHttp().get(URL)]);
    return res[0].results;
  };

  const { data, status } = useQuery(["Data"], getPopular);

  return {
    data,
    status,
    URL_IMG,
  };
};

export default fetching;
