import { useState } from "react"
import { Link } from "react-router-dom"

function Product_item({props}) {
//   const [colors, setColors] = useState(['black', 'white', 'red'])

  return (
    <Link className="product_item block w-1/4 h-2/3 hover:text-gray-500">
      <div className="border bg-gray-100">
        <img src={props.imageURL} alt="" />
        <div className="pl-5">
            <div className="flex my-2">
                {props.colors.map((color) => {
                    return <div key={color} className="h-8 w-8 mr-2" style={{background: color}}></div>
                })}
            </div>
            <div>{props.name}</div>
            <div className="py-2 text-lg">{props.price}.000 VND</div>
        </div>
    </div>
    </Link>
    
  )
}

export default Product_item