import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import swiper1 from "../../../assets/home/swiper1.jpg";
import swiper2 from "../../../assets/home/swiper2.jpg";
import swiper3 from "../../../assets/home/swiper3.jpg";
import swiper4 from "../../../assets/home/swiper4.jpg";
import swiper5 from "../../../assets/home/swiper5.jpg";

const Category = () => {
  return (
    <Swiper
      className="transform translate3d-0 overflow-hidden"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide className="transition-transform duration-300 ease-in-out">
        <img
          className="object-cover w-full h-full"
          src={swiper1}
          alt="Chowmein"
        />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
          Chowmein
        </h3>
      </SwiperSlide>
      <SwiperSlide className="transition-transform duration-300 ease-in-out">
        <img className="object-cover w-full h-full" src={swiper2} alt="Pizza" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide className="transition-transform duration-300 ease-in-out">
        <img
          className="object-cover w-full h-full"
          src={swiper3}
          alt="Spaghetti"
        />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
          Spaghetti
        </h3>
      </SwiperSlide>
      <SwiperSlide className="transition-transform duration-300 ease-in-out">
        <img
          className="object-cover w-full h-full"
          src={swiper4}
          alt="Biriyani"
        />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
          Biriyani
        </h3>
      </SwiperSlide>
      <SwiperSlide className="transition-transform duration-300 ease-in-out">
        <img
          className="object-cover w-full h-full"
          src={swiper5}
          alt="French Fries"
        />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
          French Fries
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
