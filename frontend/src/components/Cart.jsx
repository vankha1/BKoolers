import { PiSuitcaseSimple } from "react-icons/pi";
import useCheckDeviceScreen from "../customizes/useCheckDeviceScreen";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const NotifyIcon = (props) => {
    const { numb } = props;

    if (numb == 0) return null;
    else if (numb > 99)
        return (
            <span className="absolute -right-1 h-5 w-5 rounded-full bg-red-600 flex justify-center items-center items">
                <span className="text-white text-xs">99+</span>
            </span>
        );
    else return (
        <span className="absolute -right-1 h-5 w-5 rounded-full bg-red-600 flex justify-center items-center items">
            <span className="text-white text-xs">{numb}</span>
        </span>
    );
}

const Cart = (props) => {
    const [itemNums, setItemNums] = useState(3);
    const [cartOpen, setCartOpen] = useState(false);
    const isMobile = useCheckDeviceScreen();

    const handleCartOpen = () => {
        if(!isMobile) setCartOpen(!cartOpen);
    }

    console.log(itemNums); 
    return (
        <> 
            <NotifyIcon numb={itemNums}/>
            { isMobile ?
                <Link to = "/cart">
                    <PiSuitcaseSimple size={"3rem"}/>
                </Link> : 
                <div>
                    <PiSuitcaseSimple size={"3rem"}/>
                </div>
            }
        </>    
    )
}

export default Cart;