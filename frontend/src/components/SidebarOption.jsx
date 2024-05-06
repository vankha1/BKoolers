import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const SidebarOption = ({title, options, func, products, now, setVal, setFunc}) => {
    const [icon, setIcon] = useState(true)
    const [check, setCheck] = useState()

    const handleIconClick = () => {
        setIcon(!icon)
    }
    
    const handleCheck = (option) => {
      if (check == option) {
        setCheck('')
        setFunc('')
        if (setVal == '') {
          func(products)
        } else {
          let newproducts = []
          if(setVal.length > 2) {
            if (setVal.includes('100.000')) {
              newproducts = products.filter(pro => pro.price >= 100000 && pro.price < 400000)
            } else if (setVal.includes('1.000.000')) {
              newproducts = products.filter(pro => pro.price >= 700000 && pro.price <= 1000000)
            } else if (setVal.includes('400.000')) {
              newproducts = products.filter(pro => pro.price >= 400000 && pro.price < 700000)
            }
          } else {
            newproducts = products.filter(pro => pro.size == setVal)
          }
          func(newproducts)
        }
      } else {
        setFunc(option)
        setCheck(option)
        handleFilt(option)
      }
    }

    const handleFilt = (option) => {
      if (option.length <= 2 && option.length > 0) {
        let newproducts = []
        if (setVal == '') {
          newproducts = [...products]
        } else {
          if (setVal.includes('100.000')) {
            newproducts = products.filter(pro => pro.price >= 100000 && pro.price < 400000)
          } else if (setVal.includes('1.000.000')) {
            newproducts = products.filter(pro => pro.price >= 700000 && pro.price <= 1000000)
          } else if (setVal.includes('400.000')) {
            newproducts = products.filter(pro => pro.price >= 400000 && pro.price < 700000)
          } else {
            newproducts = products
          }
        }
        if (option == '') {
          func(newproducts)
        } else {
          let filtpro = newproducts.filter(product => product.size == option)
          func(filtpro)
        }
      } else {
          let newproducts = []
          if (setVal.length == 0) {
            newproducts = [...products]
          } else {
            newproducts = products.filter(pro => pro.size == setVal)
          }
          
          let filtpro = []
          if(option == '') {
            filtpro = [...newproducts]
          } else {
            if (option.includes('100.000')) {
              filtpro = newproducts.filter(pro => pro.price >= 100000 && pro.price < 400000)
            } else if (option.includes('1.000.000')) {
              filtpro = newproducts.filter(pro => pro.price >= 700000 && pro.price <= 1000000)
            } else {
              filtpro = newproducts.filter(pro => pro.price >= 400000 && pro.price < 700000)
            }
          }
          func(filtpro)
      }
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