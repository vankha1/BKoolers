import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Product_item from "../components/Product_item";
import useFetchCart from "../customizes/useFetchCart";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [checkColor, setCheckColor] = useState();
  const [checkSize, setCheckSize] = useState();
  const [sizes, setSizes] = useState([]);
  const [product, setProduct] = useState({});
  const [productArr, setProductArr] = useState([]);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState('');
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    }
  }, [])

  const { data, trigger } = useFetchCart(2);

  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost/web-assignment/backend/products/detail?id=${productId}`
      )
      .then((res) => {
        setQuantity(1);
        setProductArr(res.data);
        setProduct(res.data[0]);
        setSizes(res.data[0].size.split(","));
        let price = "";
        for (var i = res.data[0].price.toString().length - 1; i >= 0; i--) {
          price = res.data[0].price.toString()[i] + price;
          if ((res.data[0].price.toString().length - 1 - i) % 3 == 2 && i != 0) {
            price = "." + price;
          }
        }
        setPrice(price);
      });

    axios
      .get(
        `http://localhost/web-assignment/backend/products/quantity?id=${productId}`
      )
      .then((res) => {setStock(res.data[0].quantity);});

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [productId]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/web-assignment/backend/products/all")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const handleAdd = async () => {
    await axios.post("http://localhost/web-assignment/backend/cart/add", {
      product_id: productId,
      size: checkSize,
      color: checkColor,
      customer_id: 2,
      number: quantity,
    });
    trigger();
  };

  const handleBuy = async () => {
    await axios
      .post("http://localhost/web-assignment/backend/cart/add", {
        product_id: productId,
        size: checkSize,
        color: checkColor,
        customer_id: 2,
        // customer_id: Number(document.cookie.slice(
        //   document.cookie.indexOf("userID") + 7
        // )),
        number: quantity,
      })
      .then(() => {
        navigate("/shipping");
      });
  };

  return (
    <>
      <div className={`text-lg ${!isMobile && 'mb-8'} font-medium px-5 py-4 border border-gray-200`}>
        {product.name}
      </div>
      <div className={`${!isMobile && 'flex'} mb-14`}>
        <div className={`${isMobile ? 'w-full pb-10 border-b border-gray-200' : 'w-1/2 md:pl-5 pl-20'}`}>
          <div className={`${isMobile ? 'px-5' : 'w-full lg:w-7/12'} m-auto`}>
            <img src={product.image} alt="" />
          </div>
        </div>

        <div className={`${isMobile ? 'py-5 border-b border-gray-200' : 'w-1/2 md:pr-0 pr-20'}`}>
          <div>
            <div className={`${isMobile ? 'px-5' : 'w-4/5 lg:w-3/5 m-auto'}`}>
              <div className="py-3 text-lg font-medium">{product.name}</div>
              <div className="py-3 text-2xl font-medium">{price} VND</div>
              <div className="flex justify-between py-3">
                <div>Color</div>
                <div className="flex mr-2">
                  {productArr.map((eproduct) => {
                    return (
                      <div
                        key={eproduct.color}
                        onClick={() => {
                          setCheckColor(eproduct.color);
                          setProduct(eproduct);
                          setSizes(eproduct.size.split(","));
                        }}
                        className={`h-8 w-8 ml-2 border cursor-pointer ${
                          checkColor == eproduct.color
                            ? "border-2 border-black"
                            : "border-gray-200"
                        }`}
                        style={{ background: eproduct.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between py-3">
                <div>Size</div>
                <div className="flex justify-between">
                  {sizes.map((psize) => {
                    return (
                      <div
                        key={psize}
                        onClick={() => setCheckSize(psize)}
                        className={`border-2 cursor-pointer ${
                          checkSize == psize
                            ? "border-black"
                            : "border-gray-200"
                        }  px-2 py-1 mx-2`}
                      >
                        Size {psize}
                      </div>
                    );
                  })}
                </div>
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
                <div className="mr-2">
                  {stock > 0 ? "Còn hàng" : "Hết hàng"}
                </div>
              </div>

              <div className="mt-12 mb-4">
                <button
                  onClick={handleAdd}
                  className="btn-secondary w-full"
                  disabled={stock <= 0}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div>
                <button
                  onClick={handleBuy}
                  className="btn-primary w-full"
                  disabled={stock <= 0}
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="new-arrival w-full h-20 flex justify-between items-center px-1">
          <h1 className={`${isMobile ? 'text-lg font-semibold' : 'title'} leading-10`}>SẢN PHẨM MỚI</h1>
          <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/newarrivals">Xem tất cả</Link>
        </div>
        <div className='flex'>
          {isMobile ? products.slice(0,2).map((product, index) => {
            return <Product_item key={index} product={product} isMobile/>
          }) : products.slice(0,4).map((product, index) => {
            return <Product_item key={index} product={product}/>
          })}
        </div>

        <div className="best-seller w-full h-20 flex justify-between items-center px-1">
          <h1 className={`${isMobile ? 'text-lg font-semibold' : 'title'} leading-10`}>TẤT CẢ SẢN PHẨM</h1>
          <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/bestsellers">Xem tất cả</Link>
        </div>
        <div className='flex'>
        {isMobile ? products.slice(4,6).map((product, index) => {
            return <Product_item key={index} product={product} isMobile/>
          }) : products.slice(4,8).map((product, index) => {
            return <Product_item key={index} product={product}/>
          })}
        </div>
      </div>

    </>
  );
};

export default Product;
