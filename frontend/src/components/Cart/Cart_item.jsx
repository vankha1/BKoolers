import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { memo, useCallback } from "react";
import axios from "axios";

const appName = "BKooler";
//server routes
const editCart = `http://localhost:80/${appName}/backend/cart/edit`;
const deleteCart = `http://localhost:80/${appName}/backend/cart/delete`;

const Cart_Item = memo(({isMobile, data, stock, trigger}) => {
    const handleIncrease = useCallback(() => {
        if(data.quantity >= stock.quantity) return;
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color,
            quantity: data.quantity+1
        };
        axios.post(editCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    }, [trigger, data]);
    
    const handleDecrease = useCallback(() => {
        if(data.quantity <= 1) return;
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color,
            quantity: data.quantity-1
        }; 
        axios.post(editCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    }, [trigger, data]);

    const handleAbort = useCallback(() => {
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color
        };
        axios.post(deleteCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    }, [trigger, data]);

    if (stock && data) {
        if(!isMobile) return (
            <div className="w-full h-1/5 my-1 flex items-center bg-white border-b-2 border-gray-700">
                <div className="w-1/4 lg:w-1/3 h-[90%] mx-1 my-auto flex items-start lg:items-center">
                    <img className="object-fill max-h-full" src='https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg' alt="" /> 
                </div>
                <div className="h-full w-full my-auto">
                    <div className="h-1/4 py-2 my-1 mx-2 lg:mx-0 truncate">
                        {data.name}
                    </div>
                    <div className="h-1/5 my-1 mx-2 lg:mx-0 flex items-center">
                        <div className="h-full mr-3 flex items-center">
                            {data.size}
                        </div>
                        <div className="h-4 w-4" style={{background: data.color}}></div>
                    </div>
                    <div className="h-1/5 w-full my-1 mx-2 lg:mx-0 flex">
                        <button
                        disabled={data.quantity <= 1}
                        onClick={() => {handleDecrease()}}
                        >
                            <FaMinus className={data.quantity <= 1 ? "text-gray-600" : "text-black"}/>
                        </button>
                        <div className="h-full w-1/6 mx-2 flex items-center justify-center">
                            {data.quantity}
                        </div>
                        <button
                        disabled={data.quantity >= stock.quantity}
                        onClick={() => {handleIncrease()}}
                        >
                            <FaPlus className={data.quantity >= stock.quantity ? "text-gray-600" : "text-black"}/>
                        </button>
                    </div>
                    <div className="h-1/5 w-full my-1 mx-2 lg:mx-0 bg-white flex justify-between">
                        <div className="h-ful w-3/4">
                            {`Tổng: ${data.price}VND`}
                        </div>
                        <div className="h-full w-1/4 mx-2 rounded-md bg-gray-200 flex items-center justify-center"
                        onClick={() => {handleAbort()}}>
                            Huỷ
                        </div>
                    </div>
                </div>
            </div>
        )
        else {
            return (
                <div className="h-1/4 w-full p-1 flex bg-white">
                    <div className="w-1/2 h-full mx-1 my-auto flex items-center">
                        <img className="object-fill max-h-full" src='https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg' alt="" /> 
                    </div>
                    <div className="h-full w-1/2 px-1">
                        <div className="h-1/3 w-full py-auto flex font-semibold text-xl text-gray-500">
                            <div className="h-full w-4/5 truncate">
                                {data.name}
                            </div>
                            <button className="mx-1" onClick={() => {handleAbort()}}>
                                <FaX/>
                            </button>
                        </div>
                        <div className="h-1/6 w-full flex items-center">
                            <span className="text-gray-500">
                                Màu: 
                            </span>
                            <div className="h-6 w-6" style={{background: data.color}}></div>
                        </div>
                        <div className="h-1/6 w-full flex items-center">
                            <span className="text-gray-500">
                                Kích thước:
                            </span>
                            <span className="text-gray-500 text-xl">
                                {data.size}
                            </span>
                        </div>
                        <div className="h-1/6 w-full flex items-center">
                            <span className="text-gray-500 mr-2">
                                Số lượng:
                            </span>
                            <button
                            disabled={data.quantity <= 1}
                            onClick={() => {handleDecrease()}}
                            >
                                <FaMinus className={data.quantity <= 1 ? "text-gray-600" : "text-black"}/>
                            </button>
                            <div className="h-full w-1/12 mx-2 flex items-center justify-center">
                                {data.quantity}
                            </div>
                            <button
                            disabled={data.quantity >= stock.quantity}
                            onClick={() => {handleIncrease()}}
                            >
                                <FaPlus className={data.quantity >= stock.quantity ? "text-gray-600" : "text-black"}/>
                            </button>
                        </div>
                        <div className="h-1/6 w-full flex items-center">
                            <span className="text-gray-500 mr-7">Tổng:</span>
                            <span className="text-gray-500 text-xl">
                                {`${data.price}VND`}
                            </span>
                        </div>
                    </div>
                </div>
            )
        } 
    }
}, )

export default Cart_Item;