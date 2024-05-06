import { PiSuitcaseSimple } from "react-icons/pi";
import useCheckDeviceScreen from "../../customizes/useCheckDeviceScreen";
import { useState, useEffect, useCallback, useMemo } from "react";
import {Link, useNavigate} from "react-router-dom";
import Cart_Item from "./Cart_item";
import axios from "axios";
import useFetchCart from "../../customizes/useFetchCart";

const appName = "web-assignment"
const addOrder = `http://localhost:80/${appName}/backend/orders/add`;

const NotifyIcon = (props) => {
    const { numb } = props;

    if (numb == 0) return null;
    else if (numb > 99)
        return (
            <span className="absolute -right-1 h-3 w-3 rounded-full bg-black flex justify-center items-center items">
                <span className="text-white text-xs">99+</span>
            </span>
        );
    else return (
        <span className="absolute -right-1 h-3 w-3 rounded-full bg-black flex justify-center items-center items">
            <span className="text-white text-xs">{numb}</span>
        </span>
    );
}

const Cart = (props) => {
    const userID = document.cookie.slice(document.cookie.indexOf('userID')).split(';')[0].split('=')[1];
    const navigate = useNavigate();
    const {data, trigger} = useFetchCart(userID);
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

    const itemNums = data.length;

    const handleShipping = useCallback(() => {
        setCartOpen(false);
        navigate("/shipping");
    }, [])

    useEffect(() => {
        if(isCartOpen) {
            scrollRef.current.className = "overflow-hidden h-screen";
        } else {
            scrollRef.current.className = "h-screen";
        }
    }, [isCartOpen])

    
  
    return (
        <> 
            <NotifyIcon numb={itemNums}/>
            { isMobile ?
                <Link to = "/cart">
                    <PiSuitcaseSimple size={"25"}/>
                </Link> :
                <div>
                    <PiSuitcaseSimple className="hover:cursor-pointer" size={"25"} onClick={() => handleCartOpen()}/>
                    <div className={`h-[92%] w-[30%] fixed top-[8%] left-full z-[95] p-1 flex flex-col justify-between border-gray-700 bg-white ${isCartOpen ? "-translate-x-full" : "translate-x-full"} duration-[0.25s] transition-all ease-in-out`}>
                        <div className="h-full overflow-auto">
                        {
                            data ? 
                                data.map((d, index) => <Cart_Item isMobile={isMobile} data={data[index]} key={index}
                                trigger={trigger}
                                ></Cart_Item>)
                            : <div>Chưa có sản phẩm nào</div>
                        }
                        </div>
                        <button className="h-[8] w-ful p-2 btn-primary"
                        onClick={() => handleShipping()}>
                            Mua
                        </button>
                    </div>
                </div>
            }
        </>    
    )
}

export default Cart;