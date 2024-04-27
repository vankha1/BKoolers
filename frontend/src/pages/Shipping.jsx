import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Shipping = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost/web-assignment/backend/cart/detailCart?id=2`)
      .then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost/web-assignment/backend/cart/calculate?id=2`).then(res => console.log(res))
  }, [])

  const handleMakeOrder = async () => {
    await axios.post('http://localhost/web-assignment/backend/orders/add', {
      data: {
        customer_id: 1,
        name: name,
        phone: phone,
        address: address,
        payment_method: 'cash',
        
      }
    })
  }

  return (
    <>
      <div className="px-5 py-3 border border-gray-100">
        <h1 className="title">Shipping</h1>
      </div>

      <div className="content flex my-10">
        <div className="w-1/2 pl-20 pr-16 border-r border-gray-300">
          <div className=" mb-6 font-semibold text-lg">
            Thông tin khách hàng
          </div>

          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Họ tên
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={name}
                onInput={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Điện thoại
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={phone}
                onInput={e => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Địa chỉ
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={address}
                onInput={e => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Ghi chú
              </label>
            </div>
            <div className="md:w-4/5">
              <textarea
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
              />
            </div>
          </div>

          <div className="float-right py-2">
            <button onClick={handleMakeOrder} className="btn-primary px-5 mr-10">Xác nhận</button>
            <Link to="/" className="btn-secondary py-[10px] px-8">
              Thoát
            </Link>
          </div>
        </div>

        <div className="w-1/2 pr-20 pl-16 h-96 overflow-scroll">
          <div className=" mb-6 font-semibold text-lg">Danh sách sản phẩm</div>

          {products.map((product, index) => (
            <div key={index} className="flex mb-3">
              <div className="w-16 border border-gray-200 mr-5">
                <img src={product.image} alt="" />
              </div>
              <div className="flex-1">
                <div className="font-medium mb-3">{product.name}</div>
                <div className="flex">
                  <div className="mr-20">Size: {product.size}</div>
                  <div>Số lượng: {product.quantity}</div>
                </div>
                <div>Giá: {product.price} VND</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shipping;
