import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cart_Item from "../components/Cart/Cart_item";
import useFetchCart from "../customizes/useFetchCart";

const appName = "web-assignment";
//server routes
const cartDetail = `http://localhost:80/${appName}/backend/cart/detailCart`;
const cartEdit = `http://localhost:80/${appName}/backend/cart/edit`;

const CartMobile = () => {
    const {data, stock, trigger} = useFetchCart(2);

    const handleShipping = useCallback(() => {
        //TODO
    }, [])
    
 return (
    <div className="h-fit w-screen overflow-auto">
            {
                data.map((i, index) => <Cart_Item isMobile={true} data={data[index]} key={index} stock={stock} trigger={trigger}></Cart_Item>)
            }
        <div className="h-15 w-screen p-2">
            <div className="h-full w-full flex items-center justify-center rounded-lg bg-black text-2xl text-white"
                onClick={() => {handleShipping()}}
            >Mua</div>
        </div>
    </div>
 )
}

export default CartMobile;