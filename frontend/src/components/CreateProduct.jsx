import React from 'react'
import Popup from "reactjs-popup";
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

import PopupContent from './PopupContent';

const CreateProduct = ({func}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState(0);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [discount, setDiscount] = useState("")
    const [size, setSize] = useState("");

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
        await axios.put(`http://localhost/web-assignment/backend/products/add`, {
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
        func()
      };

  return (
    <Popup trigger={<button className='btn-primary px-5 m-5'> Create new product </button>} modal nested>
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
                <PopupContent close={close} content={createField} action={handleSubmit} isCreate/>
            </div>
          </div>
        )}
      </Popup>
  )
}

export default CreateProduct