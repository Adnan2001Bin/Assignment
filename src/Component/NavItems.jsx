import React from "react";

const userViewNavItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "collections",
      label: "Collections",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "contact",
      label: "Contact",
    },
];

const NavItems = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
      {userViewNavItems.map((navItem) => (
        <a
          key={navItem.id}
          href={`#${navItem.id}`}
          className="flex flex-col items-center gap-1 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-500"
        >
          <span>{navItem.label}</span>
          <hr
            className="w-2/4 border-none h-0.5 bg-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      ))}
    </nav>
  );
};

export default NavItems;