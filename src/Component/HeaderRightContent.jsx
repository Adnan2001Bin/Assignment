import React from "react";
import {
  ChevronDown,
  Search,
  ShoppingBag,
  SquareUserRound,
} from "lucide-react";

const HeaderRightContent = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 border px-2 py-1 rounded-2xl w-48">
        <Search className="w-4 h-4" />
        <input
          placeholder="Search"
          className="text-xs w-30 outline-none"
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          <SquareUserRound className="w-4 h-4 cursor-pointer" />
          <ChevronDown className="w-3 h-3 cursor-pointer" />
        </div>
      </div>
      <div className="relative cursor-pointer">
        <ShoppingBag className="w-4 h-4" />
      </div>
    </div>
  );
};

export default HeaderRightContent;