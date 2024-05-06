import React from "react";
import SelectSizeCat from "./SelectSizeCat";
import Select from 'react-select'

const PopupContent = ({ close, content, action, isCreate }) => {
  const opt = [{
    value: "red",
    label: "red",
  },
  {
    value: "blue",
    label: "blue",
  },
  {
    value: "green",
    label: "green",
  },
  {
    value: "yellow",
    label: "yellow",
  },
  {
    value: "orange",
    label: "orange",
  },
  {
    value: "purple",
    label: "purple",
  },
  {
    value: "white",
    label: "white",
  },
  {
    value: "black",
    label: "black",
  },
  {
    value: "brown",
    label: "brown",
  },
  {
    value: "pink",
    label: "pink",
  }]

  const style = {
    control: (base) => ({
      ...base,
      border: "2px solid lightgray",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid lightgray",
      },
    }),
  };

  const handleColor = (opt) => {
    content.colorField.method(opt.value)
  }

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
              placeholder={isCreate && 'Vd: AT132'}
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
              placeholder={isCreate && 'Vd: ÁO THUN CỔ TRÒN TRƠN FORM SLIMFIT AT132 MÀU ĐEN'}
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
              placeholder={isCreate && 'Vd: 400000'}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
              Màu
            </label>
          </div>
          <div className="md:w-3/4">
            <Select options={opt} styles={style} onChange={handleColor} value={{value: content.colorField.name, label: content.colorField.name}}/>
          </div>
        </div>

        <SelectSizeCat
          handCat={(opt) => content.categoryField.method(opt.value)}
          handSize={(opt) => content.sizeField.method(opt.value)}
          selectSize={{value: content.sizeField.name, label: content.sizeField.name}}
          selectCat={{value: content.categoryField.name, label: content.categoryField.name == 1 && 'Áo khoác nam' || content.categoryField.name == 2 && 'Áo thun nam' || content.categoryField.name == 3 && 'Áo sơ mi nam' || content.categoryField.name == 4 && 'Quần tây nam'}}
        />

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
              placeholder={isCreate && 'Vd: 100'}
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
              placeholder={isCreate && 'Vd: 0.2'}
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
              placeholder={isCreate && 'Vd: https://4men.com.vn/images/thumbs/2023/06/ao-thun-co-tron-tron-form-slimfit-at132-mau-den-18107-slide-products-6493b44452145.jpg'}
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
