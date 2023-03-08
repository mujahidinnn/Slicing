import popup from "../../assets/img/popup.png";
import close from "../../assets/icons/close-x.svg";

function PopupSuccess(props) {
  return (
    <div>
      <div className="animate-zoom-out fixed flex justify-center items-center z-[100] bg-[rgba(0,0,0,0.27)] inset-0">
        <div className="relative bg-white px-5 pb-5 sm:pb-[2.5%] sm:px-11 lg:px-[3%] w-[90%] sm:w-[500px] sm:h-[500px] lg:h-min lg:w-[40%] rounded-2xl xl:rounded-3xl 2xl:rounded-[30px] 4xl:rounded-[48px] 6xl:rounded-[80px] ">
          <div
            onClick={props.toogle}
            className="absolute right-[4%] top-[4%] cursor-pointer text-[#9B9B9B]"
          >
            <img
              src={close}
              className="w-[2em] 2xl:w-[2.5em] 3xl:w-[3.5em] 4xl:w-[3.875em] 5xl:w-[5.5em] 6xl:w-[7.5em] "
            />
          </div>
          <img
            src={popup}
            className="-mt-5 lg:mt-[-5%] -mb-10 sm:-ml-7 lg:ml-[-7%] lg:w-[70%]"
          />
          <h3 className="2xl:mt-[-9%] text-[1.1rem] sm:text-[1.7em] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[2.75em] 4xl:text-[3.5em] 5xl:text-[5.25em] 6xl:text-[7em] 4xl:leading-[4rem] 5xl:leading-[5.5rem] 6xl:leading-[7.5rem] text-[#22A6B3]">
            <span className="font-bold">Berhasil,</span>
            <br />
            akun kamu sudah terdaftar!
          </h3>

          <p className="mt-2 sm:mt-[1%] 3xl:mt-[3%] text-sm sm:text-base lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-[1.6em] 4xl:text-[2.2em] 5xl:text-[3em] 6xl:text-[4.25em]">
            Silahkan <span className="font-bold text-[#22A6B3]">Masuk</span>{" "}
            terlebih dahulu.
          </p>

          <button
            onClick={props.toogle}
            className="mt-6 sm:mt-[4%] text-white lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-4xl 5xl:text-6xl bg-[#22A6B3] hover:bg-[#1A7F89] font-bold rounded-lg 2xl:rounded-[1rem] 4xl:rounded-[2rem] py-3 lg:py-[3%] px-16 lg:px-[17%]"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupSuccess;
