import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="w-full h-[38rem] sm:h-[20rem] md:h-[32rem]">
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold uppercase text-white lg:text-4xl">
                {title}
              </h1>
              <p className="mb-5"></p>
            </div>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md lg:w-auto hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
              Start project
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
