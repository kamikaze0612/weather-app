import React from "react";
import { MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import Searchbar from "./Searchbar";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center gap-3">
      <button className="text-2xl text-neutral-400 hover:text-neutral-600 transition-colors">
        <MdMyLocation />
      </button>

      <MdOutlineLocationOn className="text-3xl" />
      <span>Baganuur</span>

      <Searchbar />
    </nav>
  );
};

export default Navbar;
