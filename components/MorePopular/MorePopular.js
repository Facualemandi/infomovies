"use client";
import React, { useState } from "react";
import Movies from "../../UI/molecules/MorePopular/Movies/Movies";
import TvShow from "../../UI/molecules/MorePopular/TvShow/TvShow";

const MorePopular = () => {
  const [valueSelect, setValueSelect] = useState("movies");

  const changeValueSelect = (e) => {
    setValueSelect(e.target.value);
  };

  return (
    <>
      <section className="flex ml-3 mt-3 items-center ">
        <h3 className="font-semibold">What's Popular</h3>

        <select
          onChange={changeValueSelect}
          className="ml-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <option value={"movies"}>Movies</option>
          <option value={"tv"}>Tv Shows</option>
        </select>
      </section>

      {valueSelect === "movies" && <Movies />}
      {valueSelect === "tv" && <TvShow />}
    </>
  );
};

export default MorePopular;
