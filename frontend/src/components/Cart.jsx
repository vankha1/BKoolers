import { PiSuitcaseSimple } from "react-icons/pi";
import useCheckDeviceScreen from "../customizes/useCheckDeviceScreen";
import { useState, useEffect } from "react";

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

    const isMobile = useCheckDeviceScreen();
    console.log(itemNums);
    return (
        <>
            <NotifyIcon numb={itemNums} />
            <div>
                <PiSuitcaseSimple size={25} />
            </div>
        </>
    )
}

export default Cart;