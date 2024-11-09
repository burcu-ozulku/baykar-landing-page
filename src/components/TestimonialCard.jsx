const TestimonialCard = ({ testimonial }) => {
    const { vector, company, feedback, img, user, position } = testimonial;
  
    return (
      <div className="bg-white px-8 py-7 rounded-2xl shadow-md border border-gray-100 min-w-[384px] mx-2 flex flex-col justify-between h-[430px]">
        <div className="flex items-center space-x-4">
          <img src={vector} alt="vector" className="object-cover" />
          <h6 className="font-roboto text-xl font-bold leading-[26.4px] text-left text-[#475569]">
            {company}
          </h6>
        </div>
        <p className="flex items-center text-gray-800 font-normal text-2xl leading-[38.4px] my-6 flex-grow font-roboto">
          {feedback}
        </p>
        <div className="flex items-center mt-4 justify-start">
          <img src={img} alt={user} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-gray-800 font-normal text-lg font-roboto">{user}</p>
            <p className="text-gray-500 text-base font-normal font-roboto">{position}</p>
          </div>
        </div>
      </div>
    );
  };
  export default TestimonialCard