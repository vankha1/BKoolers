import React, { useEffect, useState } from 'react'
import Product_item from '../components/Product_item'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    } else if (window.screen.width >= 640 && window.screen.width <= 1028) {
      setIsTablet(true)
    }
  }, [])

  useEffect(() => {
    axios.get('http://localhost/web-assignment/backend/products/all').then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div>
      <div className=''>
        <img src="https://i.pinimg.com/originals/cb/52/0d/cb520d2a114034d8363641ea5da3559c.jpg" alt="" />
      </div>
      <div className='px-5'>
        <div className="new-arrival w-full h-20 flex justify-between items-center px-1">
          <h1 className={`${isMobile ? 'text-lg font-semibold' : 'title'} leading-10`}>SẢN PHẨM MỚI</h1>
          <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/newarrivals">Xem tất cả</Link>
        </div>
        <div className='flex'>
        {(isMobile &&
            products.slice(0, 2).map((product, index) => {
              return <Product_item key={index} product={product} isMobile />;
            })) ||
            (isTablet &&
              products.slice(0, 3).map((product, index) => {
                return <Product_item key={index} product={product} />;
              })) || products.slice(0, 4).map((product, index) => <Product_item key={index} product={product}/>) }
        </div>

        <div className="best-seller w-full h-20 flex justify-between items-center px-1">
          <h1 className={`${isMobile ? 'text-lg font-semibold' : 'title'} leading-10`}>TẤT CẢ SẢN PHẨM</h1>
          <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products">Xem tất cả</Link>
        </div>
        <div className='flex'>
        {isMobile
            && products.slice(4, 6).map((product, index) => {
                return <Product_item key={index} product={product} isMobile />;
              })
            || isTablet && products.slice(4, 7).map((product, index) => {
                return <Product_item key={index} product={product} />;
              }) || products.slice(4,8).map((product, index) => <Product_item key={index} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Home