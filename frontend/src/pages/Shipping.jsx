import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shipping = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [remove, setRemove] = useState(true);
  const [isMobile, setIsMobile] = useState(false)

  const [nameErr, setNameErr] = useState(false)
  const [phoneErr, setPhoneErr] = useState(false)
  const [addErr, setAddErr] = useState(false)

  const userID = document.cookie.slice(document.cookie.indexOf('userID')).split(';')[0].split('=')[1];

  useEffect(() => {
    if (window.screen.width <= 1028) {
      setIsMobile(true)
    }
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost/web-assignment/backend/cart/detailCart?id=${userID}`)
      .then((res) => {setProducts(res.data);}).catch(() => {
        setProducts([])
      });
  }, [remove]);

  useEffect(() => {
    axios
      .get(`http://localhost/web-assignment/backend/cart/calculate?id=${userID}`)
      .then((res) => setTotal(res.data[0])).catch(() => {
        navigate('/')
      });
  }, [remove]);

  const handleMakeOrder = async () => {
    if (products.length == 0) {
      toast.info('Chưa có sản phẩm nào trong giỏ')
      return
    } else if (name == '') {
      setNameErr(true)
    } else if (phone == '') {
      setPhoneErr(true)
    } else if (address == '') {
      setAddErr(true)
    }

    if (name != '' && phone != '' && address != '') {
      await axios
      .post("http://localhost/web-assignment/backend/orders/add", {
          customer_id: userID,
          name: name,
          phone: phone,
          address: address,
          payment_method: "cash",
          total_quantity: total.total_quantity,
          total_price: Math.round(total.total_cost),
      })
      .then(() => {
        toast.success("Đặt hàng thành công")
        setTimeout(() => {
          navigate('/')
        }, 2000)
      });
    } else {
      toast.error('Vui lòng điền đầy đủ thông tin')
    }
  };

  const handleDelete = async (product) => {
    await axios
      .post("http://localhost/web-assignment/backend/cart/deleteCart", {
        product_id: product.id,
        size: product.size,
        color: product.color,
        customer_id: product.customer_id,
      })
      .then(() => setRemove(!remove));
  };

  let totalPrice = ''
  if (total) {
    for (var i = Math.round(total.total_cost).toString().length - 1; i >= 0; i--) {
      totalPrice = (Math.round(total.total_cost).toString()[i]) + totalPrice
      if ((Math.round(total.total_cost).toString().length - 1 - i) % 3 == 2 && i != 0) {
        totalPrice = '.' + totalPrice
      }
    }
  }

  return (
    <>
      <ToastContainer autoClose={1500}/>
      <div className="flex justify-center py-3 border-b border-gray-200">
          <Link
            to="/"
            className="w-40 h-10 flex justify-center items-center font-bold bg-black text-white"
          >
            BKooler
          </Link>
        </div>

      <div className="px-5 py-3 border border-gray-100">
        <h1 className="title">Xác nhận đơn hàng</h1>
      </div>

      <div className={`content ${!isMobile && 'flex my-10'}`}>
        <div className={`${isMobile ? 'px-5 border-t border-b border-gray-200' : 'w-1/2 px-5 lg:pl-20 lg:pr-16 border-r border-gray-300'}`}>
          <div className={`${isMobile ? 'my-5' : 'mb-6'} font-semibold text-lg`}>
            Thông tin khách hàng
          </div>

          <div className={`md:flex md:items-center ${nameErr ? '' : 'mb-6'} w-full`}>
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Họ tên
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${nameErr ? 'border-red-400' : 'border-gray-200'} rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                value={name}
                onInput={(e) => {setName(e.target.value); setNameErr(false)}}
              />
            </div>
          </div>
          {nameErr && <div className="float-right text-red-500 mb-6">Vui lòng điền thông tin</div>}

          <div className={`md:flex md:items-center ${phoneErr ? '' : 'mb-6'} w-full`}>
            <div className={`${isMobile ? 'w-2/5 md:w-1/5' : 'w-1/5'}`}>
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Điện thoại
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${phoneErr ? 'border-red-400' : 'border-gray-200'} rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                value={phone}
                onInput={(e) => {setPhone(e.target.value); setPhoneErr(false)}}
              />
            </div>
          </div>
          {phoneErr && <div className="float-right text-red-500 mb-6">Vui lòng điền thông tin</div>}

          <div className={`md:flex md:items-center ${addErr ? '' : 'mb-6'} w-full`}>
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 ">
                Địa chỉ
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${addErr ? 'border-red-400' : 'border-gray-200'} rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                value={address}
                onInput={(e) => {setAddress(e.target.value); setAddErr(false)}}
              />
            </div>
          </div>
          {addErr && <div className="float-right text-red-500 mb-6">Vui lòng điền thông tin</div>}

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

          {!isMobile && <div className="float-right py-2">
            <button
              onClick={handleMakeOrder}
              className="btn-primary px-5 mr-10"
            >
              Xác nhận
            </button>
            <Link to="/" className="btn-secondary py-[10px] px-8">
              Thoát
            </Link>
          </div>}
        </div>

        <div className={`${isMobile ? 'px-5' : 'w-1/2 pr-20 pl-16'} h-96 overflow-scroll`}>
          <div className={`${isMobile ? 'my-6' : 'mb-6'} font-semibold text-lg`}>Danh sách sản phẩm</div>
          {products.length > 0 ? products.map((product, index) => {
            let price = ''
            for (var i = Math.round(product.price * (1 - product.discount)).toString().length - 1; i >= 0; i--) {
              price = (Math.round(product.price * (1 - product.discount)).toString()[i]) + price
              if ((Math.round(product.price * (1 - product.discount)).toString().length - 1 - i) % 3 == 2 && i != 0) {
                price = '.' + price
              }
            }

            return <div key={index} className="flex justify-between mb-3">
              <div className={`${isMobile ? 'w-1/6' : 'w-1/6'} border border-gray-200`}>
                <img src={product.image} alt="" />
              </div>
              <div className={`${isMobile ? 'w-4/5' : 'w-4/5'}`}>
                <div className="font-medium mb-2 truncate">{product.name}</div>
                <div className="flex justify-between mb-1">
                  <div>Size: {product.size}</div>
                  <div>Số lượng: {product.number}</div>
                </div>
                <div className="flex justify-between">
                  <div>Giá: {price} VND</div>
                  <div
                    onClick={() => handleDelete(product)}
                    className="hover:text-red-600 font-medium cursor-pointer"
                  >
                    Xoá
                  </div>
                </div>
              </div>
            </div>
          }) : <div className="w-1/2 m-auto">
            <img src="https://www.adasglobal.com/img/empty-cart.png" alt="" />
            </div>}
          <div className="mt-8">
            {products.length != 0 ? <>
            <span className="text-xl font-normal">Tổng cộng: </span>
            <span className="text-2xl font-semibold">{(total ? totalPrice : 0)} VND</span>
            </> : <Link className="block m-auto w-fit font-semibold text-xl text-gray-500 hover:text-gray-300" to='/'>Tiếp tục mua sắm</Link>}
          </div>
        </div>

        {isMobile && <div className={`${isMobile ? 'py-10 border-b border-gray-200' : 'float-right py-2'}`}>
            <div className="w-fit m-auto">
              <button
                onClick={handleMakeOrder}
                className="btn-primary px-5 mr-10"
              >
                Xác nhận
              </button>
              <Link to="/" className="btn-secondary py-[10px] px-8">
                Thoát
              </Link>
            </div>
          </div>}
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
