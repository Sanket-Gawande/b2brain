import Image from "next/image";
import React, { useState } from "react";

const Header = ({
  searchAcc,
  searching,
  setSearching,
  setToggle,
  searchTerm,
  setSearchTerm,
}) => {
  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setToggle(false);
    }
  };
  return (
    <header className="bg-white pl-[50px] md:px-4  h-[50px] py-3 px-4 flex items-center w-full shadow-lg shadow-slate-400/10">
      {searching ? (
        <Image
          onClick={() => {
            setSearching(false);
            setSearchTerm("");
          }}
          src="/icons/times.svg"
          width="14px"
          height="14px"
          className="cursor-pointer p-2"
        />
      ) : (
        <Image
          src="/icons/search.svg"
          width="18px"
          height="18px"
          className="cursor-pointer"
        />
      )}

      <input
        onClick={() => {
          setSearching(true);
          toggleMenu();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchAcc(e.target.value);
          }
        }}
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="flex-1 bg-transparent px-2 md:px-4 md:mx-3 outline-none"
        placeholder="search by account name or website"
      />
      <span className="flex items-center w-max md:px-4">
        <span className="rounded-sm p-2 text-slate-900 relative h-8 w-8 grid place-items-center mx-2   bg-gray-200">
          <span className="bg-red-500 h-2 w-2 rounded-full absolute -top-[2px] -right-[2px]"></span>
          <Image src="/icons/notification.svg" width="14px" height="14px" />
        </span>
        <span className="rounded-sm text-slate-900 relative h-8 w-8 grid place-items-center mx-2   bg-gray-200">
          <Image src="/icons/h-logo.svg" width="32px" height="32px" />
        </span>
      </span>
    </header>
  );
};

export default Header;
