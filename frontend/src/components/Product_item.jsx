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

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    }
  }, [])

  return (
    <Link to={`/products/product/${props.product.id}`} className={`product_item block ${props.isMobile ? 'w-1/2' : 'w-1/4'} h-2/3 hover:text-gray-500`}>
      <div className="border bg-gray-100">
        <img src={props.product.image} alt="" />
        <div className="pl-3">
            {/* <div className="flex my-2">
                {props.product.colors.map((color) => {
                    return <div key={color} className="h-8 w-8 mr-2 border border-gray-100" style={{background: color}}></div>
                })}
            </div> */}
            <div className={`py-2 ${isMobile ? 'text-sm' : 'text-base'} truncate`}>{props.product.name}</div>
            <div className={`py-2 ${isMobile ? 'text-base' : 'text-lg'} truncate`}>{price} VND</div>
        </div>
    </div>
    </Link>
  )
}

export default Product_item