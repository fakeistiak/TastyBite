import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

  const {
  register,
    handleSubmit,
  formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  
  
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })

  };

  return (
    <div>
      <Helmet>
        <title>TastyBite || Sign Up</title>
      </Helmet>
      <section className="bg-gray-200">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="normal-case font-bold text-center text-white">
              <h1 className="lg:text-3xl md:2xl pl-4 sm:text-xl font-extrabold">
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
                {...register("name", { required: true })}
                className="block w-full py-3 bg-white border rounded-lg px-11"
                placeholder="Username"
              />
            </div>
            {errors.name && <p className="text-red-600">name is required.</p>}
            <div className="relative flex items-center mt-6">
              <div className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3" />
              </div>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Email address"
              />
            </div>
            {errors.email && <p className="text-red-600">email is required.</p>}

            {/* <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer  ">
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
            </label> */}

            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3" />
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                placeholder="Password"
              />
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600">password is required.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have 1 upper case 1 lower case and one special characters
              </p>
            )}

            <div className="mt-6">
              <input type="submit" value="Sign Up" className="btn w-full bg-orange-500 text-white hover:bg-orange-700"/>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
