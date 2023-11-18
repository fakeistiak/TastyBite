import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
           {noHeaderFooter|| <NavBar></NavBar>}
           {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
           {noHeaderFooter|| <Footer></Footer>}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;