import React from "react";
import logo from "../../assets/logo/logo_medium.svg";

const Navbar = (props) => {
  return (
    <div className="font-bold shadow-[0_3px_20px_rgba(0,0,0,0.25)] text-white text-xl w-full h-[50px] sm:h-[60px] flex sm:justify-between items-center rounded-b-3xl -mt-1 px-5 sm:px-10 bg-[#22A6B3]">
      <div className="sm:hidden">&#8803; &nbsp;</div>
      <img src={logo} alt="logo" className="w-20 sm:w-[8%]" />
      <ul className="hidden sm:flex">
        <li className="mx-5">
          <a href="#tentang">TENTANG</a>
        </li>
        <li className="mx-5">
          <a href="#role">ROLE</a>
        </li>
        <li className="mx-5">
          <button onClick={props.button}>
            <a href="#main">{props.text}</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
