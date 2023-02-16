import axios from "axios";
import React, { useState } from "react";
import lock from "../../assets/icons/padlock 1.svg";
import user from "../../assets/icons/user 1.svg";
import message from "../../assets/icons/message.svg";
import visibleIcon from "../../assets/icons/visible.svg";
import invisibleIcon from "../../assets/icons/invisible.svg";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [visibleConfirmation, setVisibleConfirmation] = useState(true);

  const handlePassword = (e) => {
    e.preventDefault();
    setVisiblePassword(!visiblePassword);
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    setVisibleConfirmation(!visibleConfirmation);
  };

  const visiblePass = visiblePassword ? "password" : "text";
  const visiblePassIcon = visiblePassword ? invisibleIcon : visibleIcon;
  const visiblePassClass = visiblePassword
    ? "absolute top-[17px] right-[12px] w-[20px]"
    : "absolute top-[14px] right-2.5 w-6";
  const visibleConfirm = visibleConfirmation ? "password" : "text";
  const visibleConfirmIcon = visibleConfirmation ? invisibleIcon : visibleIcon;
  const visibleConfirmClass = visibleConfirmation
    ? "absolute top-[17px] right-[12px] w-[20px]"
    : "absolute top-[14px] right-2.5 w-6";

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://frontendreq.pondokprogrammer.com/api/register";
    axios
      .post(url, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then((result) => {
        console.log(result.data);
        console.log(JSON.stringify(result.data));
        props.modal();
      })
      .catch((err) => {
        console.log(err);
        console.log(email);
      });
  };

  return (
    <div className="relative sm:px-10 sm:pb-8 sm:pt-5 sm:opacity-90 bg-white sm:border sm:border-[#CDCDCD] sm:shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] max-h-full w-full sm:w-[515px] sm:h-[529px] rounded-3xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-[#22A6B3]">Daftar</h1>
        <br />
        <p>
          Jika Anda sudah memiliki akun terdaftar,
          <br />
          Anda bisa{" "}
          <button onClick={props.toogle} className="font-bold text-[#22A6B3]">
            Masuk di sini!
          </button>
        </p>
        <div className="max-h-[250px] mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-[rgba(153,153,153,0.27)] hover:scrollbar-thumb-[#999999] scrollbar-track-[rgba(254,254,254,0.5)] scrollbar-thumb-rounded-xl">
          <div className="mb-6">
            <label className="text-sm text-[#999999]">Email</label>
            <br />
            <div className="relative">
              <img src={message} className="absolute top-[16px] mr-1" />
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
            <label className="text-sm text-[#999999]">Nama</label>
            <br />
            <div className="relative">
              <img src={user} className="absolute top-[14px] mr-1" />
              <input
                className="w-full mt-3 outline-none pl-6 pb-1 border-b border-b-black focus:border-b-2"
                name="name"
                label="name"
                type="text"
                placeholder="Masukan nama anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="text-sm text-[#999999]">Kata Sandi</label>
            <br />
            <div className="relative">
              <img src={lock} className="absolute top-[14px] mr-1" />
              <button onClick={handlePassword}>
                <img src={visiblePassIcon} className={visiblePassClass} />
              </button>
              <input
                className="w-full mt-3 outline-none pl-6 pb-1 border-b border-b-black focus:border-b-2"
                name="password"
                type={visiblePass}
                placeholder="Masukan kata sandi anda"
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="text-sm text-[#999999]">
              Konfirmasi Kata Sandi
            </label>
            <br />
            <div className="relative">
              <img src={lock} className="absolute top-[14px] mr-1" />
              <button onClick={handleConfirm}>
                <img src={visibleConfirmIcon} className={visibleConfirmClass} />
              </button>
              <input
                className="w-full mt-3 outline-none pl-6 pb-1 border-b border-b-black focus:border-b-2"
                name="password confirmation"
                type={visibleConfirm}
                placeholder="Konfirmasi kata sandi anda"
                label="password confirmation"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="w-full mt-5 -mb-1 text-white bg-[#22A6B3] py-3 font-bold rounded-full hover:bg-[#1A7F89]"
          onClick={handleSubmit}
        >
          DAFTAR
        </button>
      </form>
    </div>
  );
}

export default Register;
