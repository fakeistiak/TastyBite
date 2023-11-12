import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menuImg.jpg";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>TastyBite | Menu</title>
          </Helmet>
         <Cover img={menuImg} title="Our menu"></Cover>
    </div>
  );
};

export default Menu;
