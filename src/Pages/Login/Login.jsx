import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
      loadCaptchaEnginge(6); 
},[])


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    };
    
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
  return (
    <>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-gray-200 rounded-lg shadow-md">
        <div className="normal-case font-bold text-center">
          <h1 className="lg:text-3xl pl-4 sm:text-sm font-extrabold">
            <span>
              Tasty<span className="text-orange-500">Bite</span>
            </span>
          </h1>
        </div>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="relative flex items-center mt-6">
            <div className="absolute">
              <HiOutlineMail className="w-6 h-6 mx-3" />
            </div>
            <input
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
              placeholder="Email address..."
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
              placeholder="Password..."
            />
          </div>
          <div className="relative flex-col items-center mt-4">
            <LoadCanvasTemplate />
                        <input
                            ref={captchaRef}
              type="text"
              name="captcha"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
              placeholder="type the captcha above..."
                      />
                      <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-full mt-2 h-8 hover:bg-orange-500 hover:text-white">Validate</button>
          </div>

          <div className="mt-6">
            <button disabled={disabled}
              type="submit"
              className="btn w-full bg-orange-500 text-white hover:bg-orange-700"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border- lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase mb-2 dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div>
          <Link className="btn btn-outline w-full flex items-center justify-center">
            Sign In With Google
            <FcGoogle className="text-2xl ml-2" />
          </Link>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium  dark:text-gray-200 hover:underline"
          >
            Create One
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
