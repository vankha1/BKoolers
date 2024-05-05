import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const SignUp = ({ toast, setLog }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [fnameErr, setFnameErr] = useState(false);
  const [lnameErr, setLnameErr] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true);
    }
  }, []);

  const handleSignup = async () => {
    if (username.trim() == "") {
      setUserErr(true);
    } else if (password.trim() == "") {
      setPassErr(true);
    } else if (fname.trim() == "") {
      setFnameErr(true);
    } else if (lname.trim() == "") {
      setLnameErr(true);
    } else {
      await axios.put("http://localhost/web-assignment/backend/users/signup", {
        FName: fname,
        LName: lname,
        phone: phone,
        email: email,
        birthday: "2003-01-01",
        username: username,
        password: password,
        address: address,
        avatar:
          "https://www.fiaregion1.com/wp-content/uploads/2021/02/avatar-vector-male-profile-gray.jpg",
      }).then(res => {
        if (res.data.msg == 'success') {
          toast.success('Đăng ký thành công')
          setLog(true)
        } else {
          toast.error('Đăng ký thất bại')
        }
      });
    }
  };

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
              className={`appearance-none border-2 ${
                userErr ? "border-red-400" : "border-gray-200"
              } rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
              type="text"
              value={username}
              onInput={(e) => {
                setUsername(e.target.value);
                setUserErr(false);
              }}
            />
          </div>
        </div>
        {userErr && (
          <span className="text-xs float-right text-red-500">
            Vui lòng nhập thông tin
          </span>
        )}
      </div>

      <div className="mb-6 w-full">
        <div className="md:flex md:items-center">
          <div className="w-1/5">
            <label className="block text-gray-500 font-bold mb-1 md:mb-0">
              Password
            </label>
          </div>
          <div className="md:w-4/5">
            <input
              className={`appearance-none border-2 ${
                passErr ? "border-red-400" : "border-gray-200"
              } rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
              type="password"
              value={password}
              onInput={(e) => {
                setPassword(e.target.value);
                setPassErr(false);
              }}
            />
          </div>
        </div>
        {passErr && (
          <span className="text-xs float-right text-red-500">
            Vui lòng nhập thông tin
          </span>
        )}
      </div>

      <div className="mb-6 w-full">
      <div className="md:flex md:items-center">
        <div className={`${isMobile ? "w-2/5" : "w-1/5"}`}>
          <label className="block text-gray-500 font-bold mb-1 md:mb-0">
            First Name
          </label>
        </div>
        <div className="md:w-4/5">
          <input
            className={`appearance-none border-2 ${
              fnameErr ? "border-red-400" : "border-gray-200"
            } rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            type="text"
            value={fname}
            onInput={(e) => {
              setFname(e.target.value);
              setFnameErr(false)
            }}
          />
        </div>
        </div>
        {fnameErr && (
          <span className="text-xs float-right text-red-500">
            Vui lòng nhập thông tin
          </span>
        )}
      </div>

      <div className="md:flex md:items-center mb-6 w-full">
        <div className={`${isMobile ? "w-2/5" : "w-1/5"}`}>
          <label className="block text-gray-500 font-bold mb-1 md:mb-0">
            Last Name
          </label>
        </div>
        <div className="md:w-4/5">
          <input
            className={`appearance-none border-2 ${
              lnameErr ? "border-red-400" : "border-gray-200"
            } rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            type="text"
            value={lname}
            onInput={(e) => {
              setLname(e.target.value);
              setLnameErr(false);
            }}
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
            onInput={(e) => {
              setPhone(e.target.value);
            }}
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
            onInput={(e) => {
              setEmail(e.target.value);
            }}
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
            onInput={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
      </div>

      <button onClick={handleSignup} className="w-full btn-primary">
        Đăng ký
      </button>
    </>
  );
};

export default SignUp;
