import React, { useState } from "react";
import messege from "../../assets/icons/message.svg";
import lock from "../../assets/icons/padlock 1.svg";
import visibleIcon from "../../assets/icons/visible.svg";
import invisibleIcon from "../../assets/icons/invisible.svg";

import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const handleVisible = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const showType = show ? "password" : "text";
  const showIcon = show ? invisibleIcon : visibleIcon;
  const showIconClass = show
    ? "absolute top-[17px] right-[12px] w-[20px]"
    : "absolute top-[14px] right-2.5 w-6";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative sm:px-10 sm:py-10 sm:opacity-90 bg-white sm:border sm:border-[#CDCDCD] sm:shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] max-h-full w-full sm:w-[515px] sm:h-[495px] sm:rounded-[30px]">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-[#22A6B3]">Masuk</h1>
        <br />
        <p>
          Jika Anda belum memiliki akun terdaftar,
          <br />
          Anda bisa{" "}
          <button onClick={props.toogle} className="font-bold text-[#22A6B3]">
            Daftar di sini!
          </button>
        </p>
        <div className="max-h-[250px] mt-3">
          <div className="mb-6">
            <label className="text-sm text-[#999999]">Email</label>
            <br />
            <div className="relative">
              <img src={messege} className="absolute top-[16px] mr-1" />
              <input
                className="w-full mt-3 outline-none pl-6 pb-1 border-b border-b-black focus:border-b-2"
                name="email"
                type="email"
                placeholder="Masukan email anda"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm text-[#999999]">Kata Sandi</label>
            <br />
            <div className="relative">
              <img src={lock} className="absolute top-[14px] mr-1" />
              <button onClick={handleVisible}>
                <img src={showIcon} className={showIconClass} />
              </button>
              <input
                className="w-full mt-3 outline-none pl-6 pb-1 border-b border-b-black focus:border-b-2"
                name="password"
                type={showType}
                placeholder="Masukan kata sandi anda"
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" className="mr-2.5 cursor-pointer" />
            <label>Ingat Saya</label>
          </div>
          <a href="#">Lupa Password?</a>
        </div>
        <Link to="/dashboard/explore">
          <button
            className="w-full mt-5 text-white bg-[#22A6B3] hover:bg-[#1A7F89] py-3 font-bold rounded-full"
            onClick={handleSubmit}
          >
            MASUK
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
