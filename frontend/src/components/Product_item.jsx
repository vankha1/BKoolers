import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Product_item(props) {
  let price = ''
  for (var i = props.product.price.toString().length - 1; i >= 0; i--) {
    price = (props.product.price.toString()[i]) + price
    if ((props.product.price.toString().length - 1 - i) % 3 == 2 && i != 0) {
      price = '.' + price
    }
  }

  let newprice = ''
  for (var i = Math.round(props.product.price * (1 - props.product.discount)).toString().length - 1; i >= 0; i--) {
    newprice = (Math.round(props.product.price * (1 - props.product.discount)).toString()[i]) + newprice
    if ((Math.round(props.product.price * (1 - props.product.discount)).toString().length - 1 - i) % 3 == 2 && i != 0) {
      newprice = '.' + newprice
    }
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    }
  }, [])

  return (
    <Link to={`/products/product/${props.product.id}`} className={`product_item block ${props.isMobile ? 'w-1/2' : 'w-1/4'} h-2/3 hover:text-gray-500`}>
      <div className={`relative top-10 left-5 ${props.product.discount == 0 ? 'text-gray-100' : 'bg-red-500 text-white'}  w-fit px-3`}>-{props.product.discount * 100}%</div>
      <div className="border bg-gray-100">
        <img src={props.product.image} alt="" />
        <div className="pl-3">
            <div className="flex my-2">
              <div className="h-8 w-8 mr-2 border border-gray-200" style={{background: props.product.color}}></div>
                {/* {props.product.colors.map((color) => {
                    return <div key={color} className="h-8 w-8 mr-2 border border-gray-100" style={{background: color}}></div>
                })} */}
            </div>
            <div className={`py-2 ${isMobile ? 'text-sm' : 'text-base'} truncate`}>{props.product.name}</div>
            
            {props.product.discount != 0 ? <div className="flex">
              <div className={`py-2 ${isMobile ? 'text-base' : 'text-lg'} text-red-500 font-medium mr-5`}>{newprice} VND</div>
              <div className={`py-2 ${isMobile ? 'text-base' : 'text-lg'} line-through text-gray-400`}>{price} VND</div>
            </div> : <div className={`py-2 ${isMobile ? 'text-base' : 'text-lg font-medium'}`}>{price} VND</div>}
            
        </div>
    </div>
    </Link>
  )
}

export default Product_item