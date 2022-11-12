"use client";
import React, { useEffect, useState } from "react";
import { CiCircleList } from "react-icons/ci";

const Menu = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [menu, setMenu] = useState(false);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const openMenu = () => (!menu ? setMenu(true) : setMenu(false));

  return (
    <>
      <div className="border rounded-md flex items-center ml-3 laptop:hidden">
        <CiCircleList onClick={openMenu} className="p-1 w-11 h-10 z-50" />
      </div>

      {(menu || windowWidth >= 1024) && (
        <nav className="fixed w-full top-0 left-0 p-3 bg-sky-900 || maxLaptop:h-screen">
          <ul className="  m-auto text-white  || laptop:flex laptop:max-w-7xl cursor-pointer">
            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              Movies
              <ul className="[&>*]:p-3 font-light  || laptop:hidden laptop:[&>*:hover]:bg-sky-800 laptop:[&>*]:rounded-lg  laptop:[&>*]:duration-300">
                <li>Popular</li>
                <li>Now Playing</li>
                <li>Upcoming</li>
                <li>Top Rated</li>
              </ul>
            </li>

            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              TV Shows
              <ul className="[&>*]:p-3 font-light || laptop:hidden laptop:[&>*:hover]:bg-sky-800 laptop:[&>*]:rounded-lg laptop:[&>*]:duration-300">
                <li>Popular Tv</li>
                <li>Airing Today</li>
                <li>On Tv</li>
                <li>Top Rated</li>
              </ul>
            </li>

            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              Person
              <ul className="[&>*]:p-3 font-light || laptop:hidden laptop:[&>*:hover]:bg-sky-800 laptop:[&>*]:rounded-lg laptop:[&>*]:duration-300">
                <li>Popular People</li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
