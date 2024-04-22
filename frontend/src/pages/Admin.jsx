import React, { useEffect, useState } from "react";
import ManageProducts from "../components/ManageProducts";
import ManageUsers from "../components/ManageUsers";

const Admin = () => {
    const [isProduct, setIsProduct] = useState(true)
  
    return (
    <>
      <div className='flex px-5 border border-gray-100'>
        <h1 onClick={() => setIsProduct(true)} className={`title w-1/6 py-3 text-center cursor-pointer ${isProduct && 'bg-gray-200'}`}>Products</h1>
        <h1 onClick={() => setIsProduct(false)} className={`title w-1/6 py-3 text-center cursor-pointer ${!isProduct && 'bg-gray-200'}`}>Users</h1>
      </div>
      {isProduct ? <ManageProducts /> : <ManageUsers />}
    </>
  );
};

export default Admin;
