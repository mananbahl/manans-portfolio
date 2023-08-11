import React from "react";
const Card = (props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
      <div className="shadow-md shadow-gray-600 rounded-lg">
        <div>
          <img
            src={props.spiderman}
            alt="spiderman"
            className="rounded-md duration-200 hover:scale-105"
          />
          <div>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Demo
            </button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
