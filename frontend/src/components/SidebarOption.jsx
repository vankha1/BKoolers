import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const SidebarOption = ({title, options, func, products, now}) => {
    const [icon, setIcon] = useState(true)
    const [check, setCheck] = useState()

    const handleIconClick = () => {
        setIcon(!icon)
    }
    
    const handleCheck = (option) => {
      setCheck(option)
      handleFilt(option)
    }

    const handleFilt = (option) => {
      if (option.length <= 2) {
        let newproducts = products.filter(product => product.size == option)
        func(newproducts)
      } else {
          let newproducts =[]
          if (option.includes('100.000')) {
            const r1pro = products.filter(pro => pro.price >= 100000 && pro.price < 400000)
            newproducts = [...newproducts, ...r1pro]
          } else if (option.includes('1.000.000')) {
            const r3pro = products.filter(pro => pro.price >= 700000 && pro.price <= 1000000)
            newproducts = [...newproducts, ...r3pro]
          } else {
            const r2pro = products.filter(pro => pro.price >= 400000 && pro.price < 700000)
            newproducts = [...newproducts, ...r2pro]
          }
          func(newproducts)
      }
      // if (options[0].length <= 2) {
      //   if (newcheck.length == 0) {
      //     func(products)
      //   } else {
      //     let newproducts = now.filter(product => newcheck.includes(product.size))
      //     func(newproducts)
      //   }
      // } else {
      //   if (newcheck.length == 0) {
      //     func(products)
      //   } else {
      //     let newproducts = []
      //     newcheck.forEach(range => {
      //       if (range.includes('100.000')) {
      //         const r1pro = now.filter(pro => pro.price >= 100000 && pro.price < 400000)
      //         newproducts = [...newproducts, ...r1pro]
      //       } else if (range.includes('1.000.000')) {
      //         const r3pro = now.filter(pro => pro.price >= 700000 && pro.price <= 1000000)
      //         newproducts = [...newproducts, ...r3pro]
      //       } else {
      //         const r2pro = now.filter(pro => pro.price >= 400000 && pro.price < 700000)
      //         newproducts = [...newproducts, ...r2pro]
      //       }
      //     })
      //     func(newproducts)
      //   }
      // }
    }

  return (
    <div className='px-5'>
            <div onClick={() => handleIconClick(1)} className='flex items-center py-4 border-t border-t-gray-100 cursor-pointer'>
              {icon ? <MdKeyboardArrowDown size={28}/> : <MdKeyboardArrowUp size={28}/>}
              <h1 className='font-semibold text-lg ml-2'>{title}</h1>
            </div>
            <div className={`${icon ? 'hidden' : 'block'}`}>
              <ul>
                {options.map((option, index) => {
                  return (<li key={index} onClick={() => {handleCheck(option);}}>
                    <div className={`flex items-center px-5 lg:px-10 py-3 mb-2 bg-gray-100 cursor-pointer ${check == option && 'bg-gray-300'}`}>
                      <h1>{option[0].toUpperCase() + option.slice(1)}</h1>
                    </div>
                  </li>)
                })}
              </ul>
            </div>
          </div>
  )
}

export default SidebarOption