import React from "react";

import { BsHouseFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";



const Project = () => {
  const projects = [
    {
      id: 1,
      project_name: "My Portfolio",
      description: "My personal portfolio made from scratch.",
      project_link: "https://github.com/hashtagnosweat/portfolio",
      icon: (
        <>
          <MdComputer size={30} />
        </>
      ),
    },
    {
      id: 2,
      project_name: "Innywhere",
      description: "Made to promote cultural exchange and tourism.",
      project_link: "https://github.com/hashtagnosweat/Innywhere",
      icon: (
        <>
          <BsHouseFill size={30} />
        </>
      ),
    },
    {
      id: 3,
      project_name: "Unitive",
      description: "Designed to facilitate foreign language learning.",
      project_link: "https://github.com/hashtagnosweat/unitive-chat",
      icon: (
        <>
          <IoLanguage size={30} />
        </>
      ),
    },
    {
      id: 4,
      project_name: "Coding Major",
      description: "Subscription-based software engineering courses.",
      project_link: "https://github.com/hashtagnosweat/coding-major",
      icon: (
        <>
          <IoMdSchool size={30} />
        </>
      ),
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-400 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 text-white">
            Projects.
          </p>
        </div>

        <p className="my-5">
          Following projects showcase my skills and experience through
          real-world examples of my work.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, project_name, project_link, description, icon }) => (
            <div key={id} onClick={() => window.open(project_link, "_blank")}className="bg-gray-700 rounded-lg">
              <div className="flex flex-col px-5 justify-start h-40 rounded-md hover:bg-gray-600 text-white">
                <div className="pt-5">{icon}</div>
                <h3 className="text-2xl font-bold">{project_name}</h3>
                <p className="w-full text-gray-400 pt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
