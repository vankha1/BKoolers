import { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
    const userID = document.cookie.slice(document.cookie.indexOf('userID')).split(';')[0].split('=')[1];
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/web-assignment/backend/orders/allOrder?CustomerID=${userID}`)
        .then(res => {
            const data = res.data;
            setData(data);
        })
        .catch(error => {
            console.log(error);
            setData([]);
        })
    }, [])

    return data.length == 0 ?
        <div>
            Bạn không có đơn hàng nào
        </div>
        : data.map((d, index) => 
        <div key={index} className="border-b border-gray-300">
            <div className="mb-2 font-semibold text-lg">
                {`Đơn hàng ${d.order_id}`}
            </div>
            <div className="flex mb-2">
                <div className="w-20 md:w-32 text-lg">
                    Đến:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {d.address}
                </div>
            </div>
            <div className="flex mb-2">
                <div className="w-20 md:w-32 text-lg">
                    Điện thoại:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {d.phone}
                </div>
            </div>
            <div className="flex mb-2">
                <div className="w-20 md:w-32 text-lg">
                    Phương thức thanh toán:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {d.payment_method}
                </div>
            </div>
            <div className="flex mb-2">
                <div className="w-20 md:w-32 text-lg">
                    Tổng tiền
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {d.total_price}
                </div>
            </div>
            <div className="flex mb-2">
                <div className="w-20 md:w-32 text-lg">
                   Tình trạng:
                </div>
                <div className={`mx-5 text-lg ${d.status == 0 ? "text-gray-500": "text-green-500"}`}>
                    {d.status == 0 ? "Chưa hoàn tất" : "Hoàn tất"}
                </div>
            </div>
        </div>    
        )
}

export default History;