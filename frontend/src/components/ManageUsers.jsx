import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost/web-assignment/backend/users/all').then(res => setUsers(res.data))
    }, [])
  
    return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-base text-left rtl:text-right text-slate-800 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Ngày sinh
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
                return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4"
                >
                    {user.FName + ' ' + user.LName}
                </th>
                <td className="px-6 py-4 font-semibold">{user.address}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.birthday}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageUsers