import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';

const product = {
  colors: ['black', 'white'],
  name: 'Áo polo',
  price: 300,
  imageURL: 'https://down-vn.img.susercontent.com/file/8faf62247d4d3b33050725716526f874',
  sizes: ['S', 'M', 'L', 'XL']
}

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [checkColor, setCheckColor] = useState();
  const [checkSize, setCheckSize] = useState();

  return (
    <>
      <div className='text-lg font-medium px-5 py-4 border border-gray-200'>{product.name}</div>
      <div className='flex'>
        <div className='w-1/2 pl-20'>
          <div className='w-2/3 float-right'>
            <img src={product.imageURL} alt="" />
          </div>
        </div>
        <div className='w-1/2 pr-20 bg-gray-50'>
          <div className='w-3/5 m-auto'>
            <div className='py-3 text-lg font-medium'>{product.name}</div>
            <div className='py-3 text-2xl font-medium'>{product.price}.000 VND</div>
            <div className='flex justify-between py-3'>
              <div>Đánh giá sản phẩm</div>
              <div className='mr-2 font-medium'>4.5/5</div>
            </div>
            <div className="flex justify-between py-3">
              <div>Color</div>
              <div className='flex'>
                {product.colors.map(color => {
                  return <div key={color} onClick={() => setCheckColor(color)} className={`${checkColor == color && 'border-2 border-black'}`}>
                    <div className="h-8 w-8 m-0.5 border border-gray-200" style={{background: color}}></div>
                  </div>
                })}
              </div>
            </div>
            <div className="flex justify-between py-3">
              <div>Size</div>
              <div className='flex justify-between'>
                {product.sizes.map(size => {
                  return <div key={size} onClick={() => setCheckSize(size)} className={`border-2 ${checkSize == size ? 'border-black' : 'border-gray-200'}  px-2 py-1 mx-2`}>Size {size}</div>
                })}
              </div>
            </div>
            <div className='flex justify-between py-3'>
              <div>Số lượng</div>
              <div className='flex justify-between w-1/4 mr-2'>
                <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>
                  <FaMinus/>
                </button>
                <div className='font-medium'>{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className='py-3'>
              <button className='btn-secondary w-full'>Thêm vào giỏ hàng</button>
            </div>
            <div>
              <button className='btn-primary w-full'>Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product