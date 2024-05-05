import React, { useState } from "react";
import ManageProducts from "../components/ManageProducts";
import ManageUsers from "../components/ManageUsers";
import ManageOrders from "../components/ManageOrders";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = 'userID=; expires=Thu, 18 Dec 2013 12:00:00 UTC'
    document.cookie = 'type=; expires=Thu, 18 Dec 2013 12:00:00 UTC'
    navigate('/signin')
  }

  if (document.cookie.includes("admin")) {
    return (
      <>
        <div className="flex justify-center py-5">
          <Link
            to="/admin"
            className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
          >
            BKooler
          </Link>
          <CiLogout onClick={handleLogout} size={30} className="absolute right-14 top-7 cursor-pointer hover:text-gray-400"/>
        </div>
        <div className="flex px-5 border border-gray-100">
          <h1
            onClick={() => setCurrent(1)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 1 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Sản phẩm
          </h1>
          <h1
            onClick={() => setCurrent(2)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 2 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Người dùng
          </h1>
          <h1
            onClick={() => setCurrent(3)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 3 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Đơn hàng
          </h1>
        </div>
        {current == 1 && <ManageProducts />}
        {current == 2 && <ManageUsers />}
        {current == 3 && <ManageOrders />}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <>
          <div className="flex justify-center py-3 border-b border-gray-200">
            <Link
              to="/"
              className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
            >
              BKooler
            </Link>
          </div>

          <div className="mx-5 lg:mx-52 py-10 text-white bg-black text-center text-2xl lg:text-4xl font-medium mt-20">
            Bạn không có quyền truy cập trang này
          </div>

          <div className="w-full flex justify-center mt-10">
            <Link to="/" className="hover:text-gray-400 text-xl font-medium">
              Tiếp tục mua sắm
            </Link>
          </div>
        </>
      </>
    );
  }
};

export default Admin;
