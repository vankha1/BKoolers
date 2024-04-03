import React from 'react'
import SidebarOption from './SidebarOption'

const colors = ['red', 'black', 'white', 'yellow']
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const prices = ['200.000 - 500.000', '500.000 - 1.000.000']

const Sidebar = () => {
  return (
    <div className="sidebar w-1/4">
        <SidebarOption title='Color' options={colors}/>
        <SidebarOption title='Size' options={sizes}/>
        <SidebarOption title='Price' options={prices}/>
    </div>
  )
}

export default Sidebar