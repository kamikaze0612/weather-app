import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar: React.FC = () => {
  return (
    <form className="flex items-stretch">
      <input
        className="border rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search cities..."
      />
      <button
        className="px-4 flex items-center justify-center rounded-r-md bg-blue-500"
        type="submit"
      >
        <IoSearch className="text-xl text-neutral-50" />
      </button>
    </form>
  );
};

export default Searchbar;
