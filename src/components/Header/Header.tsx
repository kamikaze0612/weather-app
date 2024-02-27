import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="h-[80px] flex items-center justify-between px-16 bg-white shadow-md">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
