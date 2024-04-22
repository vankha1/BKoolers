import React from 'react'
import Popup from "reactjs-popup";
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

import { useState, useEffect } from 'react';

import PopupContent from './PopupContent';

const EditProduct = ({func, proid}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState(0);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [discount, setDiscount] = useState("")
    const [size, setSize] = useState("");

    useEffect(() => {
        axios.get(`http://localhost/web-assignment/backend/products/detail?id=${proid}`).then(res => {
            setId(proid)
            setName(res.data[0].NAME)
            setDescription(res.data[0].DESCRIPTION)
            setPrice(res.data[0].PRICE)
            setImage(res.data[0].image)
            setSize(res.data[0].SIZE)
            setDiscount(res.data[0].discount)
        })
    }, [])

    const createField = {
        idField: {
            name: id,
            method: setId
        },
        nameField: {
            name: name,
            method: setName
        },
        descriptionField: {
            name: description,
            method: setDescription
        },
        quantityField: {
            name: quantity,
            method: setQuantity
        },
        categoryField: {
            name: category,
            method: setCategory
        },
        priceField: {
            name: price,
            method: setPrice
        },
        imageField: {
            name: image,
            method: setImage
        },
        sizeField: {
            name: size,
            method: setSize
        },
        discountField: {
            name: discount,
            method: setDiscount
        }
    }
    
    const handleSubmit = async () => {
        await axios.put(`http://localhost/web-assignment/backend/products/update`, {
                id: id,
                cat: category,
                name: name,
                size: size,
                description: description,
                quantity: quantity,
                price: price,
                discount: discount,
                image: image
        })
        console.log('Update')
        func()
      };
  return (
    <Popup trigger={<button> <FaRegEdit className='inline-block cursor-pointer hover:text-blue-500' size={20}/> </button>} modal nested>
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
                <PopupContent close={close} content={createField} action={handleSubmit}/>
            </div>
          </div>
        )}
      </Popup>
  )
}

export default EditProduct