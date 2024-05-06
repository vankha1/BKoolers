import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../components/Signin/Login";
import SignUp from "../components/Signin/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setIsMobile(true)
    }
  }, [])

  const handleLogout = () => {
    document.cookie = 'userID=; expires=Thu, 18 Dec 2013 12:00:00 UTC'
    document.cookie = 'type=; expires=Thu, 18 Dec 2013 12:00:00 UTC'
    window.location.reload()
  }

  if (document.cookie.includes("userID"))
    return (
      <>
        <div className="flex justify-center py-3 border-b border-gray-200">
          <Link
            to="/"
            className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
          >
            BKooler
          </Link>
        </div>

        <div className="mx-52 py-10 text-white bg-black text-center text-4xl font-medium mt-20">
          Bạn đã đăng nhập thành công
        </div>

        <div className="w-full flex justify-center mt-10">
          <Link to="/" className="hover:text-gray-400 text-xl font-medium">Tiếp tục mua sắm</Link>
        </div>

        <div className="w-full flex justify-center mt-10">
          <button className="btn-secondary px-5" onClick={handleLogout}>Đăng xuất</button>
        </div>
      </>
    );

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center py-3 border-b border-gray-200">
        <Link
          to="/"
          className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
        >
          BKooler
        </Link>
      </div>

      <div className="w-full mt-5">
        <div className={`${isMobile ? 'w-11/12' : 'w-2/3 xl:w-2/5'} px-5 pb-5 m-auto border border-gray-300 rounded-xl`}>
          <div className="flex border-b border-gray-200 mb-5">
            <div
              onClick={() => setIsLogin(true)}
              className={`${
                isLogin
                  ? "border-b border-black"
                  : "text-gray-400 hover:text-black"
              } w-1/2 text-xl font-medium py-3 text-center cursor-pointer`}
            >
              Đăng nhập
            </div>
            <div
              onClick={() => setIsLogin(false)}
              className={`${
                !isLogin
                  ? "border-b border-black"
                  : "text-gray-400 hover:text-black"
              } w-1/2 text-xl font-medium py-3 text-center cursor-pointer`}
            >
              Đăng ký
            </div>
          </div>
          {isLogin ? <Login /> : <SignUp toast={toast} setLog={setIsLogin}/>}
        </div>
      </div>
    </>
  );
};

export default Signin;
