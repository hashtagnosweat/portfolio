import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Expertise = () => {

  const techs = [
    {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500'
  },
    {
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500'
  },
    {
    id: 3,
    src: javascript,
    title: 'Javascript',
    style: 'shadow-yellow-500'
  },
    {
    id: 4,
    src: reactImage,
    title: 'React',
    style: 'shadow-blue-600'
  },
    {
    id: 5,
    src: tailwind,
    title: 'Tailwind',
    style: 'shadow-sky-400'
  },
    {
    id: 6,
    src: nextjs,
    title: 'Next JS',
    style: 'shadow-white'
  },
    {
    id: 7,
    src: graphql,
    title: 'GraphQL',
    style: 'shadow-pink-400'
  },
    {
    id: 8,
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-400'
  },
]

  return (
    <div
      name="expertise"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-400">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 text-white">
            Expertise.
          </p>
        </div>
        <p className="my-5">These are the technologies I've worked with.</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center px-12 sm:px-0">

          {techs.map(({id, src, title, style}) => (
          
        <div key={id} className={`shadow-sm hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-2 md:mt-4 text-gray-200">{title}</p>
          </div>

          )
          )}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
