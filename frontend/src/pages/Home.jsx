import React from 'react'
import Product_item from '../components/Product_item'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const products = [
  {
    colors: ['black', 'white'],
    name: 'Áo polo',
    price: 300,
    imageURL: 'https://down-vn.img.susercontent.com/file/8faf62247d4d3b33050725716526f874'
  },
  {
    colors: ['black', 'white'],
    name: 'Áo polo',
    price: 300,
    imageURL: 'https://down-vn.img.susercontent.com/file/0b12664f286ccc80b6e4ba39cbff338e'
  },
  {
    colors: ['black', 'white'],
    name: 'Áo polo',
    price: 300,
    imageURL: 'https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg'
  },
  {
    colors: ['black', 'white'],
    name: 'Áo polo',
    price: 300,
    imageURL: 'https://yeepvn.sgp1.digitaloceanspaces.com/2023/04/b4fd461e522e9a283576c3d0e637fa18.jpg'
  }
]

function Home() {
  return (
    <div className='h-screen px-5'>
      <div className="new-arrival w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">NEW ARRIVAL</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.map((product, index) => {
          return <Product_item key={index} props={product}/>
        })}
      </div>

      <div className="best-seller w-full h-20 flex justify-between items-center px-1">
        <h1 className="title leading-10">BEST SELLER</h1>
        <Link className="btn-primary px-5 flex items-center hover:text-white">Xem tất cả</Link>
      </div>
      <div className='flex'>
        {products.map((product, index) => {
          return <Product_item key={index} props={product}/>
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Home