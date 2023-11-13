import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menuImg.jpg";
import dessertImg from "../../../assets/menu/dessert.jpg";
import pizzaImg from "../../../assets/menu/pizza.jpg";
import soupImg from "../../../assets/menu/soup.jpg";
import saladImg from "../../../assets/menu/salad.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../Home/Category/MenuCategory";
import Aos from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  Aos.init({ duration: 2000 });
  

  return (
    <div>
      <Helmet>
        <title>TastyBite | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* main cover */}
      <SectionTitle subHeading="---Don't Miss---"heading="today's offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered} data-aos="fade-down"></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory  items={desserts} title="desert"img={dessertImg}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
