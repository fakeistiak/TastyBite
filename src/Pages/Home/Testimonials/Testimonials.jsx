import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }, []);
    return (
      <div className="my-20">
        <SectionTitle
          subHeading="What Our Client Say"
          heading="Testimonials"
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-56 flex flex-col items-center justify-center text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />

                <p className="py-4 w-2/3">{review.details}</p>
                <h3 className="text-2xl text-amber-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Testimonials;