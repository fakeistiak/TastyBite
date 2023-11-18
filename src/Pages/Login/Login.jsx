import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const [setUser] = useState(null);
    const auth = getAuth(app);
   const provider = new GoogleAuthProvider();
   const handleGoogleSignIn = () => {
     signInWithPopup(auth, provider)
       .then((result) => {
         <Navigate to="/login"></Navigate>;

         const loggedInUser = result.user;
         console.log(loggedInUser);
         setUser(loggedInUser);
       })
       .catch((error) => {
         Swal.fire({
           position: "center",
           icon: "success",
           title: "You have successfully logged in",
           showConfirmButton: false,
           timer: 1500,
         });
         console.error(error);
         return navigate(location?.state ? location.state : "/");
         // console.error(error)
       });
   };


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully logged in",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(from,{replace:true});
  };
  return (
    <>
      <div>
        <Helmet>
          <title>TastyBite || Sign In</title>
        </Helmet>
        <section className="bg-gray-200">
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleLogin} className="w-full max-w-md pt-20">
              <div className="normal-case font-bold text-center text-white">
                <h1 className="lg:text-3xl pl-4 md:text-2xl sm:text-xl font-extrabold">
                  <span>
                    Tasty<span className="text-orange-500">Bite</span>
                  </span>
                </h1>
              </div>
              <div className="flex items-center justify-center mt-6">
                <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 border-b-2 dark:text-white dark:border-blue-400">
                  sign in
                </a>

                <Link
                  to="/register"
                  href="#"
                  className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b  dark:border-gray-400 "
                >
                  sign up
                </Link>
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
              <div className="relative flex-col items-center mt-4">
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                  placeholder="type the captcha above..."
                />
                <button className="btn btn-outline btn-xs w-full mt-2 h-8 hover:bg-black hover:text-white">
                  Validate
                </button>
              </div>

              <div className="mt-6">
                <button
                  disabled={disabled}
                  onClick={showSuccessAlert}
                  className="btn w-full bg-orange-500 text-white hover:bg-orange-700"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border- lg:w-1/5"></span>

                <a
                  href="#"
                  className="text-xs text-center uppercase mb-2 hover:underline"
                >
                  or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>

              <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full flex items-center hover:bg-black justify-center">
                  Sign In With Google
                  <FcGoogle className="text-2xl ml-2" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
};

export default Login;
