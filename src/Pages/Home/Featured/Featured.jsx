import React from "react";
import { Parallax } from "react-parallax";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
      <Parallax
          className="object-cover"
      blur={5}
      bgImage="https://i.ibb.co/CzrkDdC/side-view-shawarma-with-fried-potatoes-board-cookware-1.jpg"
      bgImageAlt="background"
      strength={300}
    >
      <div className="text-white">
        <SectionTitle
          subHeading="check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div className="md:flex justify-center items-center py-8 px-16">
          <div>
            <img
              className="h-[400px] w-[1000px] object-cover mb-12"
              src="https://i.ibb.co/CzrkDdC/side-view-shawarma-with-fried-potatoes-board-cookware-1.jpg"
              alt=""
            />
          </div>
          <div className="md:ml-10">
            <p className="text-xl">Oct 14, 2023</p>
            <p className="text-xl">WHERE CAN I GET SOME?</p>
            <p className="uppercase w-4/5 pb-4">
              Savor the essence of our featured Chicken Shawarma, a culinary
              delight crafted with succulent, marinated chicken, crisp veggies,
              and rich sauces. Elevate your taste buds with each flavorful,
              mouthwatering bite.
            </p>
            <button className="btn btn-outline text-white hover:bg-white hover:text-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Featured;
