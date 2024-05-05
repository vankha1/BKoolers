import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [confirmID, setConfirmID] = useState(0)

    useEffect(() => {
        axios.get('http://localhost/web-assignment/backend/orders/all').then(res => {
            setOrders(res.data)
        })
    }, [confirmID])

    const handleConfirm = async (id) => {
        await axios.put(`http://localhost/web-assignment/backend/orders/confirm?id=${id}`).then(() => {
            setConfirmID(id)
        })
    }

  return (
    <>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-slate-800 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên khách hàng
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Liên hệ
              </th>
              <th scope="col" className="px-6 py-3">
                Tổng cộng
              </th>
              <th scope="col" className="px-6 py-3">
                Hoàn tất
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
                return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4"
                >
                    {order.name}
                </th>
                <td className="px-6 py-4 font-semibold">{order.address}</td>
                <td className="px-6 py-4">{order.phone}</td>
                <td className="px-6 py-4">{order.total_price} VND</td>
                <td className="px-6 py-4">
                    {order.status == 0 ? (<><FaRegCheckCircle 
                      onClick={() => handleConfirm(order.order_id)}
                      size={22}
                      className="mr-4 inline-block cursor-pointer hover:text-green-500"/>
                    </>) : <span className='font-semibold text-green-500'>Thành công</span>}
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManageOrders