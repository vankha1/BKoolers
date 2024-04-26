import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import Product_item from '../components/Product_item';
import axios from 'axios';

function ProductDisplay({title}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/web-assignment/backend/products/all').then(res => {
      setProducts(res.data)
    })
  }, [])

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

  // const [page, setPage] = useState(1)
  // const [pages, setPages] = useState(() => {
  //   let result = []
  //   for (var i = 1; i <= Math.ceil(products.length / 20); i++) {
  //     result.push(i)
  //   }
  //   return result
  // })
  // const [pageContent, setPageContent] = useState(products.slice(0, 20))

  // const handleClick = (page) => {
  //   setPage(page)
  //   setPageContent(products.slice(20*(page-1),20*page))
  //   window.scrollTo({ 
  //     top: 0,  
  //     behavior: 'smooth'
  //   });
  // }

  return (
    <div>
      <div className='px-5 py-3 border border-gray-100'>
        <h1 className='title'>{title}</h1>
      </div>
      <div className="flex">
        <Sidebar func={setProducts}/>
        <div className="content w-3/4">
          <div className="flex justify-between items-center p-5 border border-gray-100">
            <div>
              {products.length} sản phẩm
            </div>
            <div className='flex items-center justify-between w-1/4'>
              <label>Sắp xếp theo</label>
              <div className='w-3/5'>
                <Select placeholder='Mặc định' onChange={handleChange} options={orderlist} />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {/* {pageContent.map(product => <Product_item key={product.id} product={product}/>)} */}
            {products.map((product, index) => <Product_item key={index} product={product}/>)}
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