import {
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdMenuBook, MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome" className="text-xl">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="text-xl">
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="text-xl">
              <FaShoppingCart></FaShoppingCart>My Cart:{cart.length}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="text-xl">
              <MdOutlineRateReview />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment" className="text-xl">
              <MdOutlinePayment />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking" className="text-xl">
              <FaCalendarCheck />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="text-xl">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="text-xl">
              <MdMenuBook></MdMenuBook>Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
