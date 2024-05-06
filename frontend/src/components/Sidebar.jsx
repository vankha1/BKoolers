import React, { useEffect } from 'react'
import SidebarOption from './SidebarOption'
import axios from 'axios'
import { useState } from 'react'


const Sidebar = ({func, now, products}) => {
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const sizes = ['S', 'M', 'L', 'XL']
  const prices = ['100.000đ - 400.000đ', '400.000đ - 700.000đ', '700.000đ - 1.000.000đ']

  return (
    <div className="sidebar w-1/4">
        <SidebarOption title='Size' setVal={price} setFunc={setSize} options={sizes} now={now} func={func} products={products}/>
        <SidebarOption title='Price' setVal={size} setFunc={setPrice} options={prices} now={now} func={func} products={products}/>
    </div>
  )
}

export default Sidebar