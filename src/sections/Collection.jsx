import React, { useState } from 'react';
import chart from "../assets/images/chart.svg";
import { ellipses } from '../assets/constants';
import { Tooltip } from 'antd';
import CountUp from 'react-countup';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Ellipse = ({ width, height, top, left }) => (
  <div
    className="absolute border-[3px] border-solid border-[#A3E635] rounded-full bg-transparent"
    style={{ width, height, top, left }}
  ></div>
);

const Collection = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });


  useEffect(() => {
    if (inView) {
      setKey(prevKey => prevKey + 1);
    }
  }, [inView]);
  return (
    <section
      className="h-[717px] p-20 gap-20 border-y-[1px] flex justify-center items-center"
      ref={ref}
    >
      <div className="relative w-[1049px] h-[633px]">
        <img className="w-full h-full object-cover opacity-[0.5]" src={chart} alt="Map" />

        {ellipses.map((ellipse, index) => (
          <Ellipse
            key={index}
            width={ellipse.width}
            height={ellipse.height}
            top={ellipse.top}
            left={ellipse.left}
          />
        ))}
        <div className="z-30 absolute -top-[22px] left-[29px] w-[256px] h-[200px] bg-white opacity-80 shadow-lg rounded-md p-4">
          <Tooltip title={<span className="font-roboto text-sm font-normal leading-[19.6px] text-left text-secondary">Emma Simpson collected one pair of <strong>Cool Shoes</strong>.</span>} color="#E2E8F0">
            <div className="relative top-[228px] left-[50%] transform -translate-x-1/2 w-[32px] h-[32px] border-[3px] border-solid border-[#A3E635] bg-[#D9F99D] rounded-full"></div>
          </Tooltip>
        </div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-[50%] w-[1280px] h-[176px] bg-transparent flex flex-col gap-2 items-center justify-center">
          <p className="text-white text-[96px] font-[800] leading-[105.6px] text-center font-roboto">
            <CountUp key={key} start={0} end={11658467} duration={4} separator="," />
          </p>
          <p className="text-white text-[56px] font-[800] leading-[61.6px] text-center font-roboto">Shoes Collected</p>
        </div>
      </div>
    </section>
  );
};

export default Collection;
