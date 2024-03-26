import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex h-2/5 mt-10'>
        <div className='w-1/2'>
          <div className='w-40 h-10 flex justify-center items-center font-bold bg-black text-white mb-3'>BKlothes</div>
          <button className='btn-secondary px-5'>
            <Link className='hover:text-black'>Xem ngay</Link>
          </button>
        </div>
        <div className='w-1/2 flex'>
          <div className='w-2/5'>
            <div className='text-lg mb-2 font-semibold'>Liên hệ</div>
            <div className='text-sm font-semibold'>Hotline</div>
            <div className='text-sm mb-2'>1900 1664</div>
            <div className='text-sm font-semibold'>Email for customer</div>
            <div className='text-sm mb-2'>bklothescustomercare@gmail.com</div>
            <div className='text-sm font-semibold'>Email for business</div>
            <div className='text-sm mb-2'>bklothesbusinesscare@gmail.com</div>
            <div className='text-sm font-semibold'>Email for recruitment</div>
            <div className='text-sm mb-3'>bklotheshr@gmail.com</div>
            <div className='flex items-center justify-between w-3/5'>
              <BiLogoFacebookSquare className='hover:cursor-pointer hover:scale-105' size={30}/> 
              <FaInstagram className='hover:cursor-pointer hover:scale-105' size={25} />
              <FaYoutube className='hover:cursor-pointer hover:scale-105' size={25} />
              <FaTiktok className='hover:cursor-pointer hover:scale-105' size={20}/>
            </div>
          </div>

          <div className=''>
            <div className='text-lg mb-2 font-semibold'>Cửa hàng</div>
            <div className='text-sm font-semibold'>Chi nhánh 1</div>
            <div className='text-sm mb-2'>268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh</div>
            <div className='text-sm font-semibold'>Chi nhánh 2</div>
            <div className='text-sm mb-2'>Đông Hoà, Dĩ An, Bình Dương</div>
          </div>

        </div>
    </div>
  )
}

export default Footer