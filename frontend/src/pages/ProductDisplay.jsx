import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import Product_item from '../components/Product_item';
import axios from 'axios';

function ProductDisplay({title}) {
  const [products, setProducts] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [allproducts, setAllproducts] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState([])
  const [pageContent, setPageContent] = useState([])

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
      setAllproducts(res.data)
      setPageContent(res.data.slice(0,12))
      let pageArr = []
      for (var i = 0; i < res.data.length / 12; i++) {
        pageArr.push(i+1)
      }
      setPages(pageArr)
    })
  }, [content])

  useEffect(() => {
    setPageContent(products.slice(0,12))
    setPage(1)
    let pageArr = []
    for (var i = 0; i < products.length / 12; i++) {
      pageArr.push(i+1)
    }
    setPages(pageArr)
  }, [products])

  const handleChange = (opt) => {
    let newProducts = [...products]
    if (opt.value == 'inc') {
      newProducts.sort((a, b) => (a.PRICE || a.price) - (b.PRICE || b.price))
    } else {
      newProducts.sort((a, b) => (b.PRICE || b.price) - (a.PRICE || a.price))
    }
    setProducts(newProducts)
  }

  const handleClick = (nowpage) => {
    setPageContent(products.slice((nowpage - 1)*12, (nowpage - 1)*12+12))
    setPage(nowpage)
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
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
        <h1 className='title'>{title == 'New Arrival' && 'Sản phẩm mới' || title == 'All Products' && 'Tất cả sản phẩm' || title}</h1>
      </div>
      <div className="flex">
        {!isMobile && <Sidebar now={products} products={allproducts} func={setProducts}/>}
        <div className={`content ${isMobile ? 'w-full' : 'w-3/4'} `}>
          <div className={`${!isMobile && 'flex'} justify-between items-center p-5 border border-gray-100`}>
            <div className={`${isMobile && 'text-center mb-4 font-semibold'}`}>
              {products.length} sản phẩm
            </div>
            <div className={`flex items-center justify-between ${isMobile ? 'w-full' : 'w-1/2 lg:w-1/3'} `}>
              <label>Sắp xếp theo</label>
              <div className='w-3/5'>
                <Select placeholder='Mặc định' onChange={handleChange} options={orderlist} />
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap ${isMobile && 'px-5'}`}>
            {pageContent.map(product => <Product_item key={product.id} product={product} isMobile={isMobile}/>)}
            {/* {products ? products.map((product, index) => <Product_item key={index} product={product} isMobile={isMobile}/>) : <div>Không có sản phẩm phù hợp</div>} */}
          </div>
          <div className='ml-5'>
            {pages.map(curpage => <button className={`mt-5 mr-5  ${curpage == page ? 'underline' : 'hover:text-gray-400 hover:underline'}`} key={curpage} onClick={() => handleClick(curpage)}>Page {curpage}</button>)}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ProductDisplay