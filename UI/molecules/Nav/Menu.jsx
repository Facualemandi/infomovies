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
        <nav className="fixed  w-full top-0 left-0 p-3 bg-sky-900">
            
          <ul className="  m-auto text-white  || laptop:flex laptop:max-w-7xl">
            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              Movies
              <ul className="[&>*]:p-3 font-light || laptop:hidden">
                <li>Opcion1</li>
                <li>Opcion2</li>
                <li>Opcion3</li>
                <li>Opcion3</li>
              </ul>
            </li>

            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              TV Shows
              <ul className="[&>*]:p-3 font-light || laptop:hidden">
                <li>Opcion1</li>
                <li>Opcion2</li>
                <li>Opcion3</li>
                <li>Opcion3</li>
              </ul>
            </li>

            <li className="[&>*]:hover:block font-semibold || laptop:w-36">
              Person
              <ul className="[&>*]:p-3 font-light || laptop:hidden">
                <li>Opcion1</li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
