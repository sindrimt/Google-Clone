import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";
import { useResultContext } from "../contexts/ResultContextProvider";

import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  /*  const { results, isLoading, getResults, searchTerm, setSearchTerm } =
    useResultContext();
  const [title, setTitle] = useState(""); */

  /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Title length: ${title.length}`);

    if (title.length === 0) return;

    getResults(`/search/q=${title}&num=30`);
  }; */

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-darkBlue border-whiteIsh">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-darkBlue dark:text-blackIsh">
            Glone 😹
          </p>
        </Link>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Search on Glone"
              className="flex items-center rounded p-2 dark:bg-darkBlue float-left text-left w-auto "
            />
            <button
              className="flex text-2xl px-5 py-1 float-right"
              onClick={handleSubmit}
            >
              🔍
            </button>
          </div>
        </form> */}
        <button
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className="text-xl dark:bg-blackIsh dark:text-white bg-white border rounded-full p-3 hover:shadow-lg dark:border-white"
        >
          {darkTheme ? <CgSun size={25} /> : <HiMoon size={25} />}
        </button>
      </div>
      <Search />
    </div>
  );
};
