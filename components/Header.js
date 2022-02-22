import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avartar from "./Avartar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const value = searchInputRef.current.value;
    if (!value) return;
    router.push(`/search?term=${value}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="Google"
          className="cursor-pointer"
          onClick={(e) => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 border-2 rounded-full shadow-lg max-w-3xl items-center">
          {/* <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 border-2 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"> */}
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-5 mr-3 text-blue-500 hidden sm:inline-flex" />
          <button onClick={searchHandler} type="submit" hidden>
            Search
          </button>
          {/* </div> */}
        </form>
        <Avartar className="ml-auto mt-1" url="https://www.dualshockers.com/static/uploads/2021/09/Boruto-Episode-Pays-Homage-To-Naruto-and-Sasukes-Legendary-Fight-1140x641.jpg" />
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
