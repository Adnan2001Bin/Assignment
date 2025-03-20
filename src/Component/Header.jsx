import React from "react";
import HeaderRightContent from "./HeaderRightContent";
import NavItems from "./NavItems";

function Header() {
  return (
    <div>
      <header className="sticky top-0 z-40 shadow-sm mx-12 bg-white">
        <div className="w-full flex items-center justify-between px-8 py-4 sm:py-6 h-auto min-h-[90px] gap-10">
          <div className="cursor-pointer w-[12%]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
              SkillConnect
            </span>
          </div>

          <div className="flex items-center gap-10">
            <NavItems />
            <HeaderRightContent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
