import React from "react";

const Shipping = () => {
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
            <button className="btn-primary px-5 mr-10">Xác nhận</button>
            <button className="btn-secondary px-8">Thoát</button>
          </div>
        </div>

        <div className="w-1/2 pr-20 pl-16 h-96 overflow-scroll">
        <div className=" mb-6 font-semibold text-lg">
            Danh sách sản phẩm
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-16 border border-gray-200 mr-5">
                <img src="https://4men.com.vn/thumbs/2021/05/ao-polo-soc-ngang-po038-19560-p.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="font-medium mb-3">ÁO SƠ MI SLIMFIT TRƠN VẢI CHÉO SM061 MÀU ĐEN</div>
                <div className="flex">
                    <div className="mr-20">Size: </div>
                    <div>Số lượng: </div>
                </div>
                <div>Giá: </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
