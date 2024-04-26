import React from "react";
import { useState } from "react";
import Select from "react-select";
import Popup from "reactjs-popup";
import { IoClose } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";

const RestockProduct = ({ func, proid }) => {
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");

  const handleRestock = async () => {
    await axios.post("http://127.0.0.1:8080/web-assignment/backend/products/restock", {
        data: {
            quantity: quantity,
            id: proid,
            size: size
        }
    })

    func()
  }

  const sizelist = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];

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

  return (
    <Popup
      trigger={
        <button>
          <IoMdAddCircleOutline
            size={23}
            className="ml-3 inline-block cursor-pointer hover:text-green-500"
          />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="absolute right-0">
            <button
              onClick={() => {
                close();
              }}
            >
              <IoClose size={25} />
            </button>
          </div>
          <div className="content">
            <div className="title font-medium px-5 py-4">Restock product</div>
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
                    value={proid}
                    readOnly
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6 w-full">
                <div className="w-1/5">
                  <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
                    Quantity
                  </label>
                </div>
                <div className="md:w-3/4">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                    onInput={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    type="text"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 w-full">
                  <div className="w-1/5">
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
                      Size
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <Select
                      styles={style}
                      options={sizelist}
                      onChange={(opt) => setSize(opt.value)}
                    />
                  </div>
                </div>
            </div>

            <div className="float-right px-10 py-2">
          <button
            className="btn-primary px-5 mr-10"
            onClick={() => {
              handleRestock();
              close();
            }}
          >
            Restock
          </button>
          <button
            className="btn-secondary px-8"
            onClick={() => {
              close();
            }}
          >
            Exit
          </button>
        </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default RestockProduct;
