import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <section className="flex items-center  w-full rounded-md bg-white border || laptop:absolute bottom-9 laptop:w-11/12 laptop:ml-3 ">
        <CiSearch className="w-8 h-8 text-slate-400"/>
        <input type={"text"} className="p-3  w-full outline-none" />
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex items-center text-white p-3  rounded-md">
          Search
        </span>
      </section>
    </>
  );
};

export default Search;
