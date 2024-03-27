import { RiArrowLeftDoubleLine } from "react-icons/ri";
import {Link} from "react-router-dom";

const Menu = (props) => {
    const {handleMenu, menuState} = props;
    const handle = () => {
        handleMenu()
    }

    return (
        <div className={`flex flex-col h-[100%] flex-1 ${menuState ? "block" : "hidden"}`}>  
            <div className="ml-4">
            <RiArrowLeftDoubleLine size={'4rem'} onClick={() => {handleMenu()}}/>
            </div>
            <div className="flex flex-col flex-1">
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products">All Products</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/newarrivals">New Arrivals</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/bestsellers">Best Sellers</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/shirts">Shirts</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/pants">Pants</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/footwears">Foot Wears</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/products/outerwears">Outer Wears</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="/about">About us</a>
            </div>
        </div>
    )
};

export default Menu;