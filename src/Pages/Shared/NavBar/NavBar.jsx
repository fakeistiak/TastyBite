import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);

   console.log(user?.displayName);
   const handleLogOut = () => {
     logOut().then().catch();
   };
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/carts">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-white max-w-screen-xl fixed z-10 bg-opacity-30">
        {" "}
        {/* Add w-full to make it full-width */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case font-bold text-center">
            <h1 className="lg:text-3xl pl-4 sm:text-sm font-extrabold">
              <span>
                Tasty<span className="text-orange-500">Bite</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-co items-center px-4">
            <div className="flex-col text-center">
              {user && (
                <img
                  className="w-10 h-10 avatar rounded-full object-cover"
                  src={user?.photoURL}
                  alt="User_avatar"
                />
              )}
              <h1 className="sm:text-sm text-white">
                {user && user?.displayName}
              </h1>
            </div>

            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-orange-500 hover:bg-orange-700 text-white ml-4"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-orange-500 hover:bg-orange-700 text-lg px-7 md:px-8 lg:px-6 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
