import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ridorachmatanlana/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/hashtagnosweat",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ridorachmatan@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
      <div className="flex h-20 justify-center p-4 mx-auto bg-black text-white">

      <ul className="flex flex-row items-center space-x-6">
        {links.map(({ id, child, href }) => (
          <li key={id} className="flex justify-between">
            <a href={href} classname="" target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Footer;
