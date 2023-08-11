import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const [nav, setNav] = useState(false);
  const NavHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-3xl font-signature ml-2">Manan Bahl</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link.link} smooth duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden"
        onClick={NavHandler}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            >
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to={link.link}
                smooth
                duration={500}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
