import { joinUsData } from "../assets/constants";
import SignUpButton from "../components/SignUpButton";
import joinUsImage from "../assets/images/card-image1.png";

const AboutUs = () => {
  const circleColors = ['text-red-500', 'text-yellow-500', 'text-green-500'];

  return (
    <section
      className="flex justify-center items-center max-lg:flex-col h-[816px] gap-10 w-full max-container"
    >
      <div className="bg-white w-full max-w-[1280px] h-[496px] p-[80px] gap-[80px] rounded-[30px] shadow-container">
        <div className="flex flex-col lg:flex-row gap-6 lg:space-x-4">
          <div className="w-full lg:w-[520px] h-auto flex flex-col gap-6">
            <div className="text-left font-roboto text-[56px] font-extrabold leading-[61.6px]">
              Why join us
            </div>
            <div className="w-full lg:w-[489px] h-[108px]">
              <div className="container mx-auto">
                <ul className="list-disc">
                  {joinUsData.map((item, index) => (
                    <li key={index} className="flex items-center h-9 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SignUpButton />
          </div>

          <div className="flex w-full lg:max-w-[520px] h-auto rounded-[20px] border-[5px] border-solid border-white bg-white shadow-box relative flex-col">
            {/* Color Circles */}
            <div className="h-[41px] p-[8px] px-[16px] top-0 left-0 right-0 gap-[10px] flex items-center">
              {circleColors.map((color, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="10" height="10" className={color}>
                  <circle cx="5" cy="5" r="5" fill="currentColor" />
                </svg>
              ))}
            </div>

            <div className="relative">
              <img
                src={joinUsImage}
                alt="Status Image"
                className="max-h-[309px] object-cover rounded-[15px]"
              />

              {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 w-[144px] h-[144px] p-[24px_20px_24px_28px] rounded-full bg-[#121619BF] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -3 24 24" width="96" fill="currentColor" className="text-white">
                  <path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
