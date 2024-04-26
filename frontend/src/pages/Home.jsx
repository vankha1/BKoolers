import React, { useEffect, useState } from 'react'
import Product_item from '../components/Product_item'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/web-assignment/backend/products/all').then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className='px-5'>
      <div className="new-arrival w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">NEW ARRIVAL</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/newarrivals">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.slice(0,4).map((product, index) => {
          return <Product_item key={index} product={product}/>
        })}
      </div>

      <div className="best-seller w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">BEST SELLER</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white" to="/products/bestsellers">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.slice(4,8).map((product, index) => {
          return <Product_item key={index} product={product}/>
        })}
      </div>
    </div>
  )
}

export default Home