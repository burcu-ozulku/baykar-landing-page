import TheBestCard from "../components/TheBestCard";
import { theBestData } from "../assets/constants"
const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12  gap-[80px] ">

      <div className="px-6 xl:p-16 h-[776px]">
        <div className="flex flex-col space-y-6 xl:space-y-14">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-6 xl:gap-y-0 xl:justify-between">
            <h3 className="font-roboto font-semibold text-3xl xl:text-5xl text-white">
              The best of the best
            </h3>
            <button
              type="button"
              className="text-white font-semibold text-lg tracking-wide border-[1px] border-white rounded-md text-md px-11 py-2.5 text-center"
            >
              Sign up now
            </button>
          </div>

          <div className="xl:grid xl:grid-cols-3 xl:gap-x-14">
            {theBestData.map((item, index) => (
              <TheBestCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PopularProducts;
