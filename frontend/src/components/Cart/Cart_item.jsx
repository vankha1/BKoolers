import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { memo, useCallback } from "react";
import axios from "axios";

const appName = "web-assignment";
//server routes
const editCart = `http://localhost:80/${appName}/backend/cart/edit`;
const deleteCart = `http://localhost:80/${appName}/backend/cart/delete`;

const Cart_Item = ({isMobile, data, trigger}) => {
    const handleIncrease = () => {
        if(data.number >= data.quantity) return;
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color,
            quantity: data.number+1,
            customer_id: data.customer_id
        };
        axios.post(editCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    };
    
    const handleDecrease = () => {
        if(data.number <= 1) return;
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color,
            quantity: data.number-1,
            customer_id: data.customer_id
        }; 
        axios.post(editCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    };

    const handleAbort = () => {
        const newData = {
            product_id: data.product_id,
            size: data.size,
            color: data.color,
            customer_id: data.customer_id
        };
        console.log(newData)
        axios.post(deleteCart, newData)
        .then(res => trigger())
        .catch(err => console.log(err));
    };

    if (data) {
        if(!isMobile) return (
            <div className="w-full h-fit my-1 flex bg-white border-b-2 border-gray-700">
                <div className="w-1/3 h-full mx-1 my-auto flex items-start lg:items-center">
                    <img className="object-fit" src={data.image} alt="" /> 
                </div>
                <div className="h-full w-2/3">
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
                        disabled={data.number <= 1}
                        onClick={() => {handleDecrease()}}
                        >
                            <FaMinus className={data.number <= 1 ? "text-gray-600" : "text-black"}/>
                        </button>
                        <div className="h-full w-1/6 mx-2 flex items-center justify-center">
                            {data.number}
                        </div>
                        <button
                        disabled={data.number >= data.quantity}
                        onClick={() => {handleIncrease()}}
                        >
                            <FaPlus className={data.number >= data.quantity ? "text-gray-600" : "text-black"}/>
                        </button>
                    </div>
                    <div className="h-1/5 w-full my-1 mx-2 lg:mx-0 bg-white flex justify-between">
                        {`Tổng: ${data.price}VND`}
                    </div>
                    <button className="w-1/4 mt-1 float-right rounded-md btn-secondary"
                    onClick={() => {handleAbort()}}>
                        Huỷ
                    </button>
                </div>
            </div>
        )
        else {
            return (
                <div className="h-1/4 w-full p-1 flex bg-white">
                    <div className="w-1/2 h-full mx-1 my-auto flex items-center">
                        <img className="object-fill" src={data.image} alt="" /> 
                    </div>
                    <div className="h-full w-1/2 px-1">
                        <div className="h-1/3 w-full py-auto flex justify-between font-semibold text-xl text-gray-500">
                            <div className="h-full w-4/5 truncate">
                                {data.name}
                            </div>
                            <button className="px-3 rounded btn-secondary" onClick={() => {handleAbort()}}>
                                <FaX/>
                            </button>
                        </div>
                        <div className="h-1/6 w-full pt-3 flex items-center">
                            <span className="text-gray-500">
                                Màu: 
                            </span>
                            <div className="h-6 w-6 mx-3" style={{background: data.color}}></div>
                        </div>
                        <div className="h-1/6 w-full pt-3 flex items-center">
                            <span className="text-gray-500">
                                Kích thước:
                            </span>
                            <span className="text-gray-500 text-xl mx-3">
                                {data.size}
                            </span>
                        </div>
                        <div className="h-1/6 w-full pt-3 flex items-center">
                            <span className="text-gray-500 mr-2">
                                Số lượng:
                            </span>
                            <button
                            disabled={data.number <= 1}
                            onClick={() => {handleDecrease()}}
                            >
                                <FaMinus className={data.number <= 1 ? "text-gray-600" : "text-black"}/>
                            </button>
                            <div className="h-full w-1/12 mx-2 flex items-center justify-center">
                                {data.number}
                            </div>
                            <button
                            disabled={data.number >= data.quantity}
                            onClick={() => {handleIncrease()}}
                            >
                                <FaPlus className={data.number >= data.quantity ? "text-gray-600" : "text-black"}/>
                            </button>
                        </div>
                        <div className="h-1/6 w-full pt-3 flex items-center">
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
}

export default Cart_Item;