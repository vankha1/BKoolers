import React, { useEffect, useState } from "react";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import { MdOutlineDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import CreateProduct from "./Admin/CreateProduct";
import EditProduct from "./Admin/EditProduct";
import RestockProduct from "./RestockProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost/web-assignment/backend/products/all")
      .then((res) => setProducts(res.data));
  }, [change]);

  const handleDelete = async (id) => {
    await axios.delete(
      "http://localhost/web-assignment/backend/products/delete",
      {
        data: {
          id: id,
        },
      }
    ).then(() => {
      toast.success("Xóa sản phẩm thành công", {
        autoClose: 3000,
      });
    }).catch(() => {
      toast.error("Xóa sản phẩm không thành công", {
        autoClose: 3000,
      });
    });
    setChange(!change);
  };

  const reloadPage = () => {
    setChange(!change)
  }
 
  return (
    <>
      <ToastContainer/>
      <CreateProduct func={reloadPage} toast={toast}/>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-slate-800 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hình ảnh
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                Thay đổi
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th scope="row" className="px-6 py-4">
                    <div className="w-20">
                      <img src={product.image} alt="" />
                    </div>
                  </th>
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4">{product.price} VND</td>
                  <td className="px-6 py-4">
                    <MdOutlineDelete
                      onClick={() => handleDelete(product.id)}
                      size={22}
                      className="mr-4 inline-block cursor-pointer hover:text-red-500"
                    />
                    <EditProduct func={reloadPage} proid={product.id} toast={toast}/>
                    <RestockProduct func={reloadPage} proid={product.id}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;
