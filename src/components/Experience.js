import React from "react";
import c_lang_logo from "../assets/C_Logo.png";
import cpp_logo from "../assets/cpp_logo.png";
import html_logo from "../assets/html_logo.png";
import css_logo from "../assets/css_logo.png";
import dsa_logo from "../assets/dsa_logo.png";
import git_logo from "../assets/git_logo.png";
import java_logo from "../assets/java_logo.png";
import js_logo from "../assets/js_logo.png";
import react_logo from "../assets/react_logo.png";
import ps_logo from "../assets/ps_logo.png";
import sql_logo from "../assets/sql_logo.png";

const TechItem = (props) => {
  return (
    <div
      key={props.props.id}
      className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${props.props.style}`}
    >
      <img
        src={props.props.src} //why pf.src not working ???
        alt="spiderman"
        className="w-full mx-auto"
      />
      <p className="mt-4">{props.props.title}</p>
    </div>
  );
};
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: c_lang_logo,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cpp_logo,
      title: "CPP",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: java_logo,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: html_logo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css_logo,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: js_logo,
      title: "Javascript",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: react_logo,
      title: "React.js",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: sql_logo,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: dsa_logo,
      title: "Data Structures and Algorithms",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: git_logo,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: ps_logo,
      title: "Photoshop",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-gray-800 to to-black w-full text-white md:h-screen py-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-screen mt-12 ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white mt-12 mb-12">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="py-6">
              These are the technologies I have worked with
            </p>
          </div>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 mt sm:px-8">
            {techs.map((tech) => (
              <TechItem key={tech.id} props={tech}></TechItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
