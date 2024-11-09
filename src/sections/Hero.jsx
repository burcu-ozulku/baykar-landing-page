import { FiPlayCircle } from "react-icons/fi";
import sneakers from "../assets/images/sneakers-image.png";
import SignUpButton from "../components/SignUpButton";

const Hero = () => {

  return (
    <section
      className="w-full flex xl:flex-row flex-col xl:gap-20 xl:p-20 max-container"
    >
      <div className=" xl:w-[714px] flex flex-col gap-8 justify-center items-start w-full max-xl:padding-x ">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[68px] text-secondary max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative z-10 max-sm:p-0 font-roboto text-[72px] font-extrabold leading-[79.2px] text-left">
            Collectible Sneakers
          </span>
        </h1>

        <p className="font-roboto text-lg text-[18px] text-secondary font-normal leading-[28.8px] text-left">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
        </p>

        <div className="w-[347px] h-[56px] gap-4 flex">
          <SignUpButton />
          <a className="w-[152px] h-[48px] px-2 py-3 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
            <FiPlayCircle className="mr-2" />
            Watch Demo
          </a>
        </div>
      </div>

      <div className=" flex-1 flex justify-center items-center xl:h-[583px] max-xl:py-40 bg-center">
        <div
          className="top-[131px] left-[925px] w-[367px] h-[372px] bg-[#FBBF24] gap-[10px] rounded-[50px] z-0"
        >
          <img
            src={sneakers}
            alt="shoe"
            height={388}
            width={486}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
