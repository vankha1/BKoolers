import React, { useState } from "react";
import ManageProducts from "../components/ManageProducts";
import ManageUsers from "../components/ManageUsers";
import ManageOrders from "../components/ManageOrders";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Admin = () => {
    const [current, setCurrent] = useState(1)
  
    return (
    <>
      <div className="flex justify-center py-5">
        <Link to="/" className='w-40 h-10 flex justify-center items-center font-bold bg-black text-white'>BKooler</Link>
      </div>
      <div className='flex px-5 border border-gray-100'>
        <h1 onClick={() => setCurrent(1)} className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${current == 1 ? 'border-b-2 border-black' : 'text-gray-400'}`}>Products</h1>
        <h1 onClick={() => setCurrent(2)} className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${current == 2 ? 'border-b-2 border-black' : 'text-gray-400'}`}>Users</h1>
        <h1 onClick={() => setCurrent(3)} className={`title w-1/6 py-3 text-center cursor-pointer hover:text-black ${current == 3 ? 'border-b-2 border-black' : 'text-gray-400'}`}>Orders</h1>
      </div>
      {current == 1 && <ManageProducts />}
      {current == 2 && <ManageUsers />}
      {current == 3 && <ManageOrders />}
      <Footer />
    </>
  );
};

export default Admin;
