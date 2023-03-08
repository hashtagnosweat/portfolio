import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Project = () => {

    const projects = [
        {
            id: 1,
            src: arrayDestruct,
            code_link: "https://github.com/"

        },
        {
            id: 2,
            src: reactParallax,
            code_link: "https://github.com/"
        },
        {
            id: 3,
            src: navbar,
            code_link: "https://github.com/"
        },
        {
            id: 4,
            src: reactSmooth,
            code_link: "https://github.com/"
        },
        {
            id: 5,
            src: installNode,
            code_link: "https://github.com/"
        },
        {
            id: 6,
            src: reactWeather,
            code_link: "https://github.com/"
        },
    ]

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-400 md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 text-gray-200">Projects.</p>
          </div>

          <p className="my-5">
            Following projects showcase my skills and experience through
            real-world examples of my work. 
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({id, src, code_link}) =>
          <div key={id} className="shadow-sm shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <button onClick={() => window.open(code_link, "_blank")} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
            </div>
          </div>
          )}
          </div>



        
      </div>
    </div>
  );
};

export default Project;
