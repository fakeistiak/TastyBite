import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MenuCounter from "./MenuCounter/MenuCounter";
import PopularMenu from "./PopularMenu/PopularMenu";
// import Recommendation from "./Recomendation/Recommendation";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Category></Category>
        <MenuCounter></MenuCounter>
        <AboutUs></AboutUs>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        {/* <Recommendation></Recommendation> */}
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;