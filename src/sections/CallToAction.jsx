import React from 'react';
import { collectionList } from '../assets/constants';
import cardImage1 from "../assets/images/card-image1.png";
import cardImage2 from "../assets/images/card-image2.png";
import cardImage3 from "../assets/images/card-image3.png";
import ColorCirclesCard from '../components/ImageCard';

const CallToAction = () => {
  return (
    <section>
      <div className=" w-full h-screen xl:h-[996px] py-16 px-10 xl:py-32 xl:px-20">
        <div className="w-full xl:w-2/3 h-[152px] flex">
          <div className="h-14 gap-2 flex flex-col">
            <h2 className="font-roboto text-2xl xl:text-[56px] font-extrabold leading-[61.6px] text-center lg:text-left">
              Grow your collection
            </h2>
            <div className="whitespace-pre-line font-roboto text-sm lg:text-[18px] font-normal leading-[28.8px] text-center lg:text-left">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </div>
          </div>
        </div>

        <div className="w-full h-screen mt-24 lg:mt-8 gap-5 lg:gap-20 flex flex-col lg:flex-row">
          <div className=" w-full lg:w-[256px] xl:h-[416px] gap-4 flex-row flex lg:flex-col overflow-auto overflow-y-hidden lg:overflow-visible">
            <div className="h-14 min-w-max p-2 lg:p-[16px] shadow-[0px_0px_4px_0px_#00000012] rounded-lg flex items-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2.5 -2.5 24 24"
                width="20"
                fill="currentColor"
              >
                <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
              </svg>

              <span className="font-roboto text-lg lg:text-xl font-medium px-4 text-center">
                Bibendum tellus
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 24 24"
                width="20"
                fill="currentColor"
              >
                <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
              </svg>
            </div>

            <div className="lg:space-y-4 w-full flex flex-row lg:flex-col">
              {collectionList.map((data, index) => (
                <div key={index} className="min-w-max flex h-14 p-2 lg:p-4 items-center">
                  <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                  <span className="text-lg font-semibold text-gray-800 px-4">
                    {data.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[556px] gap-10">
            <div className="absolute" style={{ top: 0, left: 0 }}>
              <ColorCirclesCard image={cardImage1} />
            </div>
            <div
              className="absolute"
              style={{
                top: "105px",
                left: "94px",
              }}
            >
              <ColorCirclesCard image={cardImage2} />
            </div>
            <img
              className="absolute w-[100px] h-[100px] lg:w-[256px] lg:h-[286px] rounded-[10px] gap-2 border-[5px] border-white top-[170px] left-[240px] lg:top-[202px] lg:left-[688px]"
              src={cardImage3}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;