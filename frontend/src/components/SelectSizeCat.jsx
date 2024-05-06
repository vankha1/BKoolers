import React from 'react'
import axios from 'axios';
import Select from 'react-select'
import { useEffect, useState } from 'react';

const SelectSizeCat = ({handCat, handSize, selectSize, selectCat}) => {
    const [size, setSize] = useState(selectSize)
    const [cat, setCat] = useState(selectCat)
    const [catlist, setCatlist] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost/web-assignment/backend/products/catlist")
          .then((res) => {
            const newCatList = res.data;
            for (var i = 0; i < newCatList.length; i++) {
              newCatList[i]["value"] = newCatList[i]["cat_id"];
              newCatList[i]["label"] = newCatList[i]["name"];
              delete newCatList[i]["cat_id"];
              delete newCatList[i]["name"];
            }
            setCatlist(newCatList);
          });
      }, []);

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
    <>
        <div className="md:flex md:items-center mb-6 w-full">
                  <div className="w-1/5">
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
                      Danh mục
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <Select
                      value={cat}
                      styles={style}
                      options={catlist}
                      onChange={(opt) => {handCat(opt); setCat(opt)}}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6 w-full">
                  <div className="w-1/5">
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pl-8">
                      Kích thước
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <Select
                      value={size}
                      styles={style}
                      options={sizelist}
                      onChange={(opt) => {handSize(opt); setSize(opt)}}
                    />
                  </div>
                </div>
    </>
  )
}

export default SelectSizeCat