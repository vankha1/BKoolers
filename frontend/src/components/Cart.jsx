import { PiSuitcaseSimple } from "react-icons/pi";
import useCheckDeviceScreen from "../customizes/useCheckDeviceScreen";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Cart_Item from "./Cart_item";

const NotifyIcon = (props) => {
    const { numb } = props;

    if (numb == 0) return null;
    else if (numb > 99)
        return (
            <span className="absolute -right-1 h-3 w-3 rounded-full bg-red-600 flex justify-center items-center items">
                <span className="text-white text-xs">99+</span>
            </span>
        );
    else return (
        <span className="absolute -right-1 h-3 w-3 rounded-full bg-red-600 flex justify-center items-center items">
            <span className="text-white text-xs">{numb}</span>
        </span>
    );
}

const Cart = (props) => {
    const [product, setProduct] = useState([
        {
            colors: ['black', 'white'],
            name: 'Áo polo',
            price: 300,
            imageURL: 'https://down-vn.img.susercontent.com/file/8faf62247d4d3b33050725716526f874'
          },
          {
            colors: ['black', 'white'],
            name: 'Áo polo',
            price: 300,
            imageURL: 'https://down-vn.img.susercontent.com/file/0b12664f286ccc80b6e4ba39cbff338e'
          },
          {
            colors: ['black', 'white'],
            name: 'Áo polo',
            price: 300,
            imageURL: 'https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg'
          },
          {
            colors: ['black', 'white'],
            name: 'Áo polo',
            price: 300,
            imageURL: 'https://yeepvn.sgp1.digitaloceanspaces.com/2023/04/b4fd461e522e9a283576c3d0e637fa18.jpg'
          }
    ])
    const [isCartOpen, setCartOpen] = useState(false);
    const isMobile = useCheckDeviceScreen();

    const handleCartOpen = () => {
        if(!isMobile) setCartOpen(!isCartOpen);
    }
    const itemNums = product.length;

    return (
        <> 
            <NotifyIcon numb={itemNums}/>
            { isMobile ?
                <Link to = "/cart">
                    <PiSuitcaseSimple size={"25"}/>
                </Link> :
                <div>
                    <PiSuitcaseSimple size={"25"} onClick={() => handleCartOpen()}/>
                    <div className={`h-[92%] w-[30%] fixed top-[8%] left-full z-[99] p-1 flex flex-col justify-between border-l border-gray-700 bg-white ${isCartOpen ? "-translate-x-full" : "translate-x-full"} duration-[0.25s] transition-all ease-in-out`}>
                        <div className="h-full overflow-auto">
                        <Cart_Item isMobile={false}/>
                        <Cart_Item/>
                        <Cart_Item/>
                        <Cart_Item/>
                        <Cart_Item/>
                        <Cart_Item/>
                        </div>
                        <div className="h-[8%] w-full p-2">
                            <div className="h-full w-full rounded-lg bg-black text-white text-xl flex justify-center items-center hover:text-2xl">BUY</div>
                        </div>

                        
                    </div>
                </div>
            }
        </>    
    )
}

export default Cart;