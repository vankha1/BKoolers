import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import Product_item from '../components/Product_item';
import axios from 'axios';

function ProductDisplay({title}) {
  const [products, setProducts] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    }
  }, [])

  let content = ''

  switch (title) {
    case 'New Arrival':
    case 'All Products':
      content = 'all'
      break
    case 'T-shirts':
      content = 'cat?id=2'
      break
    case 'Shirts':
      content = 'cat?id=3'
      break
    case 'Pants':
      content = 'cat?id=4'
      break
    case 'Outerwears':
      content = 'cat?id=1'
      break
  }

  useEffect(() => {
    axios.get(`http://localhost/web-assignment/backend/products/${content}`).then(res => {
      setProducts(res.data)
    })
  }, [content])

  const handleChange = (opt) => {
    let newProducts = [...products]
    if (opt.value == 'inc') {
      newProducts.sort((a, b) => (a.PRICE || a.price) - (b.PRICE || b.price))
    } else {
      newProducts.sort((a, b) => (b.PRICE || b.price) - (a.PRICE || a.price))
    }
    setProducts(newProducts)
  }

  const orderlist = [
    {
      value: 'inc',
      label: 'Giá tăng dần'
    },
    {
      value: 'dec',
      label: 'Giá giảm dần'
    }
  ]


  return (
    <div>
      <div className='px-5 py-3 border border-gray-100'>
        <h1 className='title'>{title}</h1>
      </div>
      <div className="flex">
        {!isMobile && <Sidebar isAll={title == 'New Arrival' || title == 'All Products'} func={setProducts}/>}
        <div className={`content ${isMobile ? 'w-full' : 'w-3/4'} `}>
          <div className={`${!isMobile && 'flex'} justify-between items-center p-5 border border-gray-100`}>
            <div className={`${isMobile && 'text-center mb-4 font-semibold'}`}>
              {products.length} sản phẩm
            </div>
            <div className={`flex items-center justify-between ${isMobile ? 'w-full' : 'w-1/4 md:w-1/2'} `}>
              <label>Sắp xếp theo</label>
              <div className='w-3/5'>
                <Select placeholder='Mặc định' onChange={handleChange} options={orderlist} />
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap ${isMobile && 'px-5'}`}>
            {/* {pageContent.map(product => <Product_item key={product.id} product={product}/>)} */}
            {products ? products.map((product, index) => <Product_item key={index} product={product} isMobile={isMobile}/>) : <div>Không có sản phẩm phù hợp</div>}
          </div>
          <div>
            {/* {pages.map(curpage => <button className={`m-5 ${curpage == page && 'underline'}`} key={curpage} onClick={() => handleClick(curpage)}>Page {curpage}</button>)} */}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ProductDisplay