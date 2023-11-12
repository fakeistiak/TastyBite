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
            <div className="max-w-xl bg-black bg-opacity-60 h-60 p-8 mx-auto">
              <h1 className="text-3xl font-bold uppercase text-orange-500 lg:text-4xl pb-2">
                {title}
              </h1>
              <p className="mb-5 text-white">
                {title} is a convenient and quick culinary option, characterized
                by pre-prepared and easily accessible meals. Typically high in
                calories and low in nutritional value, it satisfies cravings for
                instant gratification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
