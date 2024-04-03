import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Product_item from '../components/Product_item';

const products = []
for (var i = 0; i < 50; i++) {
  products.push({
    id: i,
    colors: ['black', 'white'],
    name: 'Áo polo',
    price: 300,
    imageURL: 'https://down-vn.img.susercontent.com/file/8faf62247d4d3b33050725716526f874'
  })
}

function ProductDisplay({title}) {
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(() => {
    let result = []
    for (var i = 1; i <= Math.ceil(products.length / 20); i++) {
      result.push(i)
    }
    return result
  })
  const [pageContent, setPageContent] = useState(products.slice(0, 20))

  const handleClick = (page) => {
    setPage(page)
    setPageContent(products.slice(20*(page-1),20*page))
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <div className='px-5 py-3 border border-gray-100'>
        <h1 className='title'>{title}</h1>
      </div>
      <div className="flex">
        <Sidebar />
        <div className="content w-3/4">
          <div className="flex justify-between items-center p-5 border border-gray-100">
            <div>
              {products.length} sản phẩm
            </div>
            <div>
              <label>Sắp xếp theo</label>
              <select className='border border-black p-2 ml-3 outline-none' name="filter" id="filter">
                <option value="relative">Sự liên quan</option>
                <option value="increase">Giá tăng dần</option>
                <option value="decrease">Giá giảm dần</option>
              </select>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {pageContent.map(product => <Product_item key={product.id} product={product}/>)}
          </div>
          <div>
            {pages.map(curpage => <button className={`m-5 ${curpage == page && 'underline'}`} key={curpage} onClick={() => handleClick(curpage)}>Page {curpage}</button>)}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ProductDisplay