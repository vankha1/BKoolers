import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userErr, setUserErr] = useState(false)
  const [passErr, setPassErr] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (username == '') {
      setUserErr(true);
    }

    if (password == '') {
      setPassErr(true);
    }

    await axios.put("http://localhost/web-assignment/backend/users/login", {username, password}).then((res) => { 
      document.cookie = `userID=${res.data.data.id}`
      document.cookie = `type=${res.data.data.type}`
      if(res.data.data.type == 'user') {
        navigate('/')
      } else {
        navigate('/admin')
      }
    }).catch(err => {
      if (err.response.data.msg.includes('Incorrect')) {
        setPassErr(true)
      } else {
        setPassErr(true)
        setUserErr(true)
      }
    });
  }

  return (
    <>
    <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0">
                Username
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${userErr ? 'border-red-300' : 'border-gray-200'}  rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                value={username}
                onInput={(e) => {setUsername(e.target.value); setUserErr(false)}}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-1/5">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0">
                Password
              </label>
            </div>
            <div className="md:w-4/5">
              <input
                className={`appearance-none border-2 ${passErr ? 'border-red-300' : 'border-gray-200'}  rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                type="password"
                value={password}
                onInput={(e) => {setPassword(e.target.value); setPassErr(false)}}
                onKeyUp={(e) => {if (e.key == 'Enter') handleLogin()}}
              />
            </div>
          </div>

          <button onClick={handleLogin} className='w-full btn-primary'>Đăng nhập</button>
    </>
  )
}

export default Login