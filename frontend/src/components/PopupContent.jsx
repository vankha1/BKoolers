import React from "react";
import SelectSizeCat from "./SelectSizeCat";

const PopupContent = ({ close, content, action, isCreate }) => {
  return (
    <>
      <div className="title font-medium px-5 py-4">
        {isCreate ? "Sản phẩm mới" : "Thông tin sản phẩm"}
      </div>
      <div className="w-full">
        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              ID
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.idField.method(e.target.value)}
              value={content.idField.name}
              readOnly={!isCreate}
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Tên
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.nameField.method(e.target.value)}
              value={content.nameField.name}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Giá
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.priceField.method(e.target.value)}
              value={content.priceField.name}
              type="text"
            />
          </div>
        </div>

        <SelectSizeCat
          handCat={(opt) => content.categoryField.method(opt.value)}
          handSize={(opt) => content.sizeField.method(opt.value)}
          selectSize={{value: content.sizeField.name, label: content.sizeField.name}}
        />

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Màu
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.colorField.method(e.target.value)}
              value={content.colorField.name}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Số lượng
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.quantityField.method(e.target.value)}
              value={content.quantityField.name}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Ưu đãi
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.discountField.method(e.target.value)}
              value={content.discountField.name}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Hình ảnh
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              onInput={(e) => content.imageField.method(e.target.value)}
              value={content.imageField.name}
              type="text"
            />
          </div>
        </div>

        <div className="float-right px-10 py-2">
          <button
            className="btn-primary px-5 mr-10"
            onClick={() => {
              action();
              close();
            }}
          >
            {isCreate ? "Tạo mới" : "Cập nhật"}
          </button>
          <button
            className="btn-secondary px-8"
            onClick={() => {
              close();
            }}
          >
            Hủy
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupContent;
