import React from 'react'
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const SidebarOption = ({title, options}) => {
    const [icon, setIcon] = useState(true)
    const [check, setCheck] = useState(-1)

    const handleIconClick = () => {
        setIcon(!icon)
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
                  return (<li key={index} onClick={() => {setCheck(index); console.log(index)}}>
                    <div className={`flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 ${check == index && 'bg-gray-200'}`}>
                      <div className='h-5 w-5 mr-3' style={title === 'Color' ? {backgroundColor: option} : {backgroundColor: 'lightgray', borderRadius: '50%'}}></div>
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