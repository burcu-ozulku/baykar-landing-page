import React from "react";

const ColorCirclesCard = ({ image }) => {
  const circleColors = ["text-red-500", "text-yellow-500", "text-green-500"];

  return (
    <div className="flex w-full lg:max-w-[759px] h-full lg:h-[451px] rounded-[20px] border-[5px] border-solid border-white bg-white shadow-box relative flex-col overflow-hidden">
      <div className="h-[41px] p-[8px] px-[16px] top-0 left-0 right-0 gap-[10px] flex items-center">
        {circleColors.map((color, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            className={color}
          >
            <circle cx="5" cy="5" r="5" fill="currentColor" />
          </svg>
        ))}
      </div>

      <div className="relative">
        <img
          src={image}
          alt="Image"
          className="max-h-[410px] w-[759px] object-cover rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default ColorCirclesCard;