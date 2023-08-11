import spiderman from "../assets/portfolio/spiderman.png";
import spotify_logo2 from "../assets/spotify_logo2.png";
import leadzen_logo from "../assets/leadzen_logo.png";
import snake_game_logo from "../assets/snake_game_logo.png";
import friend_logo from "../assets/friend_logo.png";
import expense_logo from "../assets/expense_logo.png";
import { useState } from "react";
// import Card from "./Card";
import React from "react";

const PortfolioItems = (pf) => {
  const text = pf.props.text;
  const imgSrc = pf.props.src;
  const [imageClicked, SetImageClicked] = useState(false);
  const clickHandler = () => {
    SetImageClicked((prevState) => !prevState);
  };

  return (
    <div key={pf.props.id} className="shadow-md shadow-gray-600 rounded-lg">
      <div>
        <img
          src={imgSrc} //why pf.src not working ???
          alt="spiderman"
          className="rounded-md duration-200 hover:scale-105"
          onClick={clickHandler}
        />
        {imageClicked ? ( //Another cool feature added by me to view the brief of project, based on state management
          <div className="items-center py-1 px-1 justify-center bg-black">
            <div className="flex my-2 items-center justify-center text-xs text-center">
              {text}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-center justify-center">
          <a
            href={pf.props.demo}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-orange-400 text-center"
          >
            Demo
          </a>
          <a
            href={pf.props.code}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-orange-400 text-center"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spiderman,
      text: "HR Manager : A CRUD Application",
      demo: "",
      code: "",
    },
    {
      id: 2,
      src: snake_game_logo,
      text: "Snake Game In java",
      demo: "https://drive.google.com/file/d/1aH3FEZjdo3ZSczMziRQ28Ohm3d6zsLS8/view?usp=sharing",
      code: "https://github.com/mananbahl/SnakeGameInJava",
    },
    {
      id: 3,
      src: expense_logo,
      text: "Expense Tracker",
      demo: "https://drive.google.com/file/d/1UzsptpsrkNL9bU_Kp51eVbPjj4K8Asff/view?usp=sharing",
      code: "https://github.com/mananbahl/react-expense-tracker",
    },
    {
      id: 4,
      src: spotify_logo2,
      text: "Spotify Clone : A music app",
      demo: "https://manansspotifywrap2022.netlify.app/",
      code: "https://github.com/mananbahl/spotify",
    },
    {
      id: 5,
      src: leadzen_logo,
      text: "A Carousel with Expandable View",
      demo: "https://drive.google.com/file/d/12Pwm33I3WKl1ztXgO0DY-79RYNhorN4H/view?usp=sharing",
      code: "https://github.com/mananbahl/leadzen-react-assignment",
    },
    {
      id: 6,
      src: friend_logo,
      text: "Friend List Maker : JAVA FX",
      demo: "https://drive.google.com/file/d/1TgsdKUSEBNiAB-hYNh7GvN2-SphULhhS/view?usp=drive_link",
      code: "https://github.com/mananbahl/GC-Consultants-Assignment-",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-800 to to-black  w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-screen mb-12 py-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Some of my works (click on the picture to get brief about the
            project)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {portfolios.map((pf) => (
            <PortfolioItems props={pf} key={pf.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
