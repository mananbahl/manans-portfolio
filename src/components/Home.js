import React from "react";
import { useState, useEffect } from "react";
import HeroImage from "../assets/heroImage.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Fresher", "Programmer", "Developer", "Designer"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray-800 flex flex-col items-center"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center h-full px-4 md:mx-16 md:ml-9">
        <div className="flex flex-col justify-center h-full w-full px-4 md:w-1/2 mx-4 md:mx-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left py-4 md:py-0">
            I am a {texts[currentIndex]}
          </h2>
          <div className="md:hidden text-gray-500 py-4 w-full text-justify">
            {/* Hide the text content on smaller screens */}I am a passionate
            fresher with expertise in coding, web development, and data
            structures and algorithms. My dedication to learning is evident
            through my completion of several internships, showcasing my drive to
            excel in the tech industry.
          </div>
          <div className="hidden md:block text-gray-500 py-4 w-full text-justify">
            {/* Display the text content on medium and larger screens */}I am a
            passionate fresher with expertise in coding, web development, and
            data structures and algorithms. My dedication to learning is evident
            through my completion of several internships, showcasing my drive to
            excel in the tech industry.
          </div>
          <div className="text-center md:text-left">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer mx-auto md:mx-0"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <BiRightArrowAlt size={22} />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-full w-1/3 md:w-1/2 px-4 h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
