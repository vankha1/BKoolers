import React, { useEffect } from 'react'
import SidebarOption from './SidebarOption'
import axios from 'axios'
import { useState } from 'react'


const Sidebar = ({func}) => {
  const sizes = ['S', 'M', 'L', 'XL']
  const [catlist, setCatlist] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/web-assignment/backend/products/catlist').then(res => {
      var list = []
      for (var i = 0; i < res.data.length; i++) {
        list.push(res.data[i].name)
      }
      setCatlist(list)
    })
  }, [])

  return (
    <div className="sidebar w-1/4">
        <SidebarOption title='Size' options={sizes} func={func}/>
        <SidebarOption title='Category' options={catlist} func={func}/>
    </div>
  )
}

export default Sidebar