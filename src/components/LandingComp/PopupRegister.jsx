import React from "react";
import popup from "../../assets/img/popup.png";

function PopupRegister() {
  return (
    <div>
      <div className="fixed flex justify-center items-center z-[100] bg-[rgba(0,0,0,0.27)] inset-0">
        <div className="relative bg-white px-5 pb-5 sm:px-11 w-[90%] sm:w-[500px] sm:h-[500px] rounded-[30px]">
          <button
            // onClick={props.toogle}
            className="absolute right-8 top-8 text-3xl text-[#9B9B9B]"
          >
            &#10005;
          </button>
          <img src={popup} className="-mt-5 -mb-10 sm:-ml-7" />
          <h3 className="text-[1.3rem] sm:text-3xl sm:leading-8 text-[#22A6B3]">
            <span className="font-bold">Daftar dan Masuk</span>
            <br />
            untuk melihat lebih banyak!
          </h3>
          <p className="mt-2 text-black">
            Jika Anda sudah memiliki akun terdaftar,
            <br />
            anda bisa{" "}
            <span className="font-bold text-[#22A6B3]">
              <a href="#">
                <button>Masuk di sini!</button>
              </a>
            </span>
          </p>

          <a href="#">
            <button
              // onClick={props.toogle}
              className="mt-4 text-white bg-[#22A6B3] hover:bg-[#1A7F89] font-bold rounded-lg py-3 px-16"
            >
              Daftar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopupRegister;
