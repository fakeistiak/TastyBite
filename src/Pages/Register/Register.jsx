import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  return (
    <div>
      <section className="bg-gray-200">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md">
            <div className="normal-case font-bold text-center text-white">
              <h1 className="lg:text-3xl pl-4 sm:text-sm font-extrabold">
                <span>
                  Tasty<span className="text-orange-500">Bite</span>
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400"
              >
                sign in
              </Link>

              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <div className="absolute">
                <FaUser className="w-6 h-6 mx-3"></FaUser>
              </div>
              <input
                type="text"
                name="name"
                className="block w-full py-3 bg-white border rounded-lg px-11"
                placeholder="Username"
              />
            </div>
            <div className="relative flex items-center mt-6">
              <div className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3" />
              </div>
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Email address"
              />
            </div>

            <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>

              <h2 className="mx-3 text-gray-400">Profile Photo</h2>

              <input id="dropzone-file" type="file" className="hidden" />
            </label>

            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3" />
              </div>
              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button className="btn w-full bg-orange-500 text-white hover:bg-orange-700">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
