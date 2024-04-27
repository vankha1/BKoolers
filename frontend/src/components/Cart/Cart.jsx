import { PiSuitcaseSimple } from "react-icons/pi";
import useCheckDeviceScreen from "../../customizes/useCheckDeviceScreen";
import { useState, useEffect, useCallback, useMemo } from "react";
import {Link} from "react-router-dom";
import Cart_Item from "./Cart_item";
import axios from "axios";
import useFetchCart from "../../customizes/useFetchCart";

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
    //let userId = document.cookie.split(";")[0];
    const userId = 2;

    const {data, trigger} = useFetchCart(userId);
    const scrollRef = props.scrollRef;
    const [isCartOpen, setCartOpen] = useState(false);
    const isMobile = useCheckDeviceScreen();

    const handleCartOpen = useCallback(() => {
        if(!isMobile) {
            setCartOpen(!isCartOpen);
            if(isCartOpen) {
                scrollRef.current.className = "overflow-hidden h-screen";
            } else {
                scrollRef.current.className = "h-screen";
            }
        }
    }, [isMobile, isCartOpen])

    const itemNums = useMemo(() => data.length, [data]);

    useEffect(() => {
        if(isCartOpen) {
            scrollRef.current.className = "overflow-hidden h-screen";
        } else {
            scrollRef.current.className = "";
        }
    }, [isCartOpen])

    const handleShipping = useCallback(() => {
        //TODO
    }, [])
  
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
                        {
                            data ? 
                                data.map((d, index) => <Cart_Item isMobile={isMobile} data={data[index]} key={index}
                                trigger={trigger}
                                ></Cart_Item>)
                            : null
                        }
                        </div>
                        <div className="h-[8%] w-full p-2">
                            <div className="h-full w-full rounded-md bg-black text-white text-xl flex justify-center items-center"
                            onClick={() => {handleShipping()}}
                            >Mua</div>
                        </div>

                        
                    </div>
                </div>
            }
        </>    
    )
}

export default Cart;