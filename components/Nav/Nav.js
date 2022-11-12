import React from "react";
import Menu from "../../UI/molecules/Nav/Menu";
import Search from "../../UI/molecules/Nav/Search";
import Poster from "../Poster/Poster";

const Nav = () => {
  return (
    <>
      <nav className="flex relative tablet:p-5 flex-col m-auto max-w-7xl ">
        <section className="flex">
          <Search />
          <Menu />
        </section>
        <Poster />
      </nav>
    </>
  );
};

export default Nav;
