import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const SidebarOption = ({title, options, func}) => {
    const [icon, setIcon] = useState(true)
    const [check, setCheck] = useState(-1)
    const [catlist, setCatlist] = useState([])

    const handleIconClick = () => {
        setIcon(!icon)
    }

    useEffect(() => {
      axios.get('http://localhost/web-assignment/backend/products/catlist').then(res => setCatlist(res.data))
    }, [])

    const handleFilt = (option) => {
      if (option.length <= 2) {
        axios.get(`http://localhost/web-assignment/backend/products/size?value=${option}`).then(res => func(res.data))
      } else {
        for (var i = 0; i < catlist.length; i++) {
          if (option == catlist[i].name) {
            axios.get(`http://localhost/web-assignment/backend/products/cat?id=${catlist[i].cat_id}`).then(res => func(res.data))
            break
          }
        }
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
                  return (<li key={index} onClick={() => {setCheck(index); handleFilt(option); handleIconClick()}}>
                    <div className={`flex items-center px-5 lg:px-10 py-2 cursor-pointer hover:bg-gray-100 ${check == index && 'bg-gray-200'}`}>
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