import { useState } from "react";
import { testimonials } from "../assets/constants";
import NavigationButton from "../components/NavigationButton";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex flex-wrap items-center h-[732px] overflow-hidden">
      <div className="w-full h-full xl:max-h-full">
        <div className="py-16">
          <div className="flex flex-col mx-auto gap-5 xl:gap-16">
            <div className="flex flex-col px-28 justify-center items-center xl:flex-row gap-y-6 xl:gap-y-0 xl:justify-between">
              <h3 className="font-roboto font-semibold text-3xl xl:text-[56px] text-[#3a3541]">
                Because they love us
              </h3>
              <div className="flex items-center gap-8">
                <NavigationButton direction="prev" onClick={handlePrev} />
                <NavigationButton direction="next" onClick={handleNext} />
              </div>
            </div>

            <div className="relative flex h-[500px] overflow-hidden justify-center">
              <div className="relative flex w-full h-[421px] bg-[#FDE68A] mx-16" />
              <div
                className="absolute pb-16 h-[550px] flex transition-transform duration-500 justify-start items-center overflow-hidden"
                style={{
                  transform: `translateX(-${currentIndex * 320}px)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
