import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true)
    }
  }, [])

  const handleSignup = async () => {
    await axios.put("http://localhost/web-assignment/backend/users/signup", {
      FName: fname,
      LName: lname,
      phone: phone,
      email: email,
      birthday: '2003-01-01',
      username: username,
      password: password,
      address: address,
      avatar: 'https://www.fiaregion1.com/wp-content/uploads/2021/02/avatar-vector-male-profile-gray.jpg'
    }).then(res => {
      if (res.data.msg == 'success') {
        window.location.reload()
      } else {
        setError(true)
      }
    })
  }

  return (
    <>
        <div className="mb-6 w-full">
          <div className="md:flex md:items-center">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0">
                Username
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${error ? 'border-red-400' : 'border-gray-200'} rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                value={username}
                onInput={(e) => {setUsername(e.target.value); setError(false)}}
              />
            </div>
          </div>
          {error && <span className="text-xs float-right text-red-500">Tên đã tồn tại</span>}
          
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Password
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="password"
              value={password}
              onInput={(e) => {setPassword(e.target.value)}}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className={`${isMobile ? 'w-2/5' : 'w-1/5'}`}>
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              First Name
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={fname}
              onInput={(e) => {setFname(e.target.value)}}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className={`${isMobile ? 'w-2/5' : 'w-1/5'}`}>
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Last Name
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={lname}
              onInput={(e) => {setLname(e.target.value)}}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Phone
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={phone}
              onInput={(e) => {setPhone(e.target.value)}}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Email
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={email}
              onInput={(e) => {setEmail(e.target.value)}}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Address
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={address}
              onInput={(e) => {setAddress(e.target.value)}}
            />
          </div>
        </div>

        <button onClick={handleSignup} className="w-full btn-primary">Đăng ký</button>
    </>
  );
};

export default SignUp;
