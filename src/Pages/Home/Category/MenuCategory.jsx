import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Aos from "aos";
import "aos/dist/aos.css";

const MenuCategory = ({ items, title, img }) => {
      Aos.init({ duration: 2000 });
    return (
      <div className="pt-16" data-aos="fade-down">
        {title && <Cover img={img} title={title}></Cover>}

        <div className="grid md:grid-cols-2 gap-10 my-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        {/* <Link to={`/order/${title}`} className="btn bg-orange-500 text-white hover:bg-orange-700 hover:text-black">
          Order Now
        </Link> */}
      </div>
    );
};

export default MenuCategory;