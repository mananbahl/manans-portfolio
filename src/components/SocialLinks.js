import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrDocumentDownload } from "react-icons/gr";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/manan-bahl-834842181/",
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/manan-bahl-834842181/",
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:mananbahl26@gmail.com",
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "",
      child: (
        <>
          Resume <GrDocumentDownload size={30} />
        </>
      ),
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              download={link.download}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
