import { Link } from "react-router-dom"

function Product_item(props) {
  return (
    <Link className={`product_item block ${props.isMobile ? 'w-1/2' : 'w-1/4'} h-2/3 hover:text-gray-500`}>
      <div className="border bg-gray-100">
        <img src={props.product.imageURL} alt="" />
        <div className="pl-5">
            <div className="flex my-2">
                {props.product.colors.map((color) => {
                    return <div key={color} className="h-8 w-8 mr-2" style={{background: color}}></div>
                })}
            </div>
            <div>{props.product.name}</div>
            <div className="py-2 text-lg">{props.product.price}.000 VND {props.product.id}</div>
        </div>
    </div>
    </Link>
  )
}

export default Product_item