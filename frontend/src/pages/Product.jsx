import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Product_item from "../components/Product_item";

const Product = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

  const [quantity, setQuantity] = useState(1);
  const [checkColor, setCheckColor] = useState();
  const [checkSize, setCheckSize] = useState();
  const [product, setProduct] = useState({});
  const [stock, setStock] = useState(0)

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost/web-assignment/backend/products/detail?id=${productId}`
      )
      .then((res) => setProduct(res.data[0]));

    axios.get(`http://localhost/web-assignment/backend/products/quantity?id=${productId}`).then((res) => setStock(res.data[0].quantity))
  }, [productId]);

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost/web-assignment/backend/products/all').then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <>
      <div className="text-lg font-medium px-5 py-4 border border-gray-200">
        {product.NAME}
      </div>
      <div className="flex py-10 mb-2">
        <div className="w-1/2 pl-20">
          <div className="w-7/12 m-auto">
            <img src={product.image} alt="" />
          </div>
        </div>

        <div className="w-1/2 pr-20">
          <div>
            <div className="w-3/5 m-auto">
              <div className="py-3 text-lg font-medium">{product.NAME}</div>
              <div className="py-3 text-2xl font-medium">{product.PRICE} VND</div>
              <div className="flex justify-between py-3">
                <div>Đánh giá sản phẩm</div>
                <div className="mr-2 font-medium">4.5/5</div>
              </div>
              {/* <div className="flex justify-between py-3">
                <div>Color</div>
                <div className='flex'>
                  {product.colors.map(color => {
                    return <div key={color} onClick={() => setCheckColor(color)} className={`${checkColor == color && 'border-2 border-black'}`}>
                      <div className="h-8 w-8 m-0.5 border border-gray-200" style={{background: color}}></div>
                    </div>
                  })}
                </div>
              </div> */}
              <div className="flex justify-between py-3">
                <div>Size</div>
                <div className="mr-2">{product.SIZE}</div>
                {/* <div className='flex justify-between'>
                  {product.sizes.map(size => {
                    return <div key={size} onClick={() => setCheckSize(size)} className={`border-2 ${checkSize == size ? 'border-black' : 'border-gray-200'}  px-2 py-1 mx-2`}>Size {size}</div>
                  })}
                </div> */}
              </div>

              <div className="flex justify-between py-3">
                <div>Số lượng</div>
                <div className="flex justify-between w-1/4 mr-2">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <FaMinus />
                  </button>
                  <div className="font-medium">{quantity}</div>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="flex justify-between py-3">
                <div>Tình trạng</div>
                <div className="mr-2">{stock > 0 ? 'Còn hàng' : 'Hết hàng'}</div>
              </div>

              <div className="mt-16 mb-4">
                <button className="btn-secondary w-full">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div>
                <button className="btn-primary w-full">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="new-arrival w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">NEW ARRIVAL</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/newarrivals">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.slice(0,4).map((barproduct, index) => {
          return <Product_item key={index} product={barproduct}/>
        })}
      </div>

      <div className="best-seller w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">BEST SELLER</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/bestsellers">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.slice(4,8).map((barproduct, index) => {
          return <Product_item key={index} product={barproduct}/>
        })}
      </div>
    </>
  );
};

export default Product;
