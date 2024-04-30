import React, { useState } from "react";
import ManageProducts from "../components/ManageProducts";
import ManageUsers from "../components/ManageUsers";
import ManageOrders from "../components/ManageOrders";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Admin = () => {
  const [current, setCurrent] = useState(1);

  if (document.cookie.includes("admin")) {
    return (
      <>
        <div className="flex justify-center py-5">
          <Link
            to="/"
            className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
          >
            BKooler
          </Link>
        </div>
        <div className="flex px-5 border border-gray-100">
          <h1
            onClick={() => setCurrent(1)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 1 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Products
          </h1>
          <h1
            onClick={() => setCurrent(2)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 2 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Users
          </h1>
          <h1
            onClick={() => setCurrent(3)}
            className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${
              current == 3 ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Orders
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

          <div className="mx-52 py-10 text-white bg-black text-center text-4xl font-medium mt-20">
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
