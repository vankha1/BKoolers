import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const contacts = [
    {
      title: 'Hotline',
      content: '1900 1945'
    },
    {
      title: 'CSKH',
      content: 'bkoolercustomercare@gmail.com'
    },
    {
      title: 'Liên hệ hợp tác',
      content: 'bkoolerbusiness@gmail.com'
    },
    {
      title: 'Tuyển dụng',
      content: 'bkoolerhr@gmail.com'
    }
  ]

  return (
    <div className='lg:flex mt-10 px-5 pb-5'>
        <div className='lg:w-1/2 mb-5 lg:mb-0'>
          <div className='m-auto mb-3 lg:m-0 lg:mb-3 w-40 h-10 flex justify-center items-center font-bold bg-black text-white'>BKooler</div>
          <button className='w-full lg:w-32 btn-secondary px-5'>
            <Link to='/about'>Xem ngay</Link>
          </button>
        </div>
        <div className='lg:w-1/2 lg:flex'>
          <div className='lg:w-1/2 pb-4'>
            <div className='text-lg mb-2 font-semibold'>Liên hệ</div>
            {contacts.map((contact, index) => {
              return (<React.Fragment key={index}>
                <div className='text-sm font-semibold'>{contact.title}</div>
                <div className='text-sm mb-2'>{contact.content}</div>
              </React.Fragment>)
            })}
            <div className='flex items-center justify-between w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/2'>
              <a href="https://facebook.com/">
                <BiLogoFacebookSquare className='hover:cursor-pointer hover:scale-105' size={25}/> 
              </a>
              <a href="https://instagram.com/">
                <FaInstagram className='hover:cursor-pointer hover:scale-105' size={22} />
              </a>
              <a href="https://youtube.com/">
                <FaYoutube className='hover:cursor-pointer hover:scale-105' size={23} />
              </a>
              <a href="https://tiktok.com/">
                <FaTiktok className='hover:cursor-pointer hover:scale-105' size={18}/>
              </a>
            </div>
          </div>

          <div className='lg:w-1/2 pt-3 lg:p-0 lg:border-none border-t border-t-gray-150'>
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