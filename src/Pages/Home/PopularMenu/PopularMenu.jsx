import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Aos from "aos";
import "aos/dist/aos.css";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


Aos.init({duration: 3000});

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <div className="mb-12 px-2">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10" data-aos="fade-down">
        {
          popular.map(item => 
          <MenuItem key={item._id} item={item}></MenuItem>
        )}
      </div>
      <div className="text-center py-8">
        <Link to="/menu" className="btn btn-outline text-black hover:bg-black hover:text-white">
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
