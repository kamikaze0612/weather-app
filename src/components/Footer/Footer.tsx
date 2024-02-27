import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-3 bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.08)] py-6">
      <h3 className="text-lg text-neutral-700 font-medium">
        &copy; 2024 Buyantogtokh Bekhbayar, All rights reserved.
      </h3>
      <p className="text-neutral-400 text-sm">
        Coded by{" "}
        <a
          className="text-neutral-600 font-medium hover:text-neutral-700"
          href="https://kamikaze0612.github.io/"
          target="_blank"
        >
          Buyantogtokh B.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
