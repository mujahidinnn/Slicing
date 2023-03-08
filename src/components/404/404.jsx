import Logo from "../../assets/logo/logo-team-up.png";
import Image from "../../assets/img/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center mt-0 md:mt-[15vh] lg:mt-[15vh]">
      <div className="flex flex-col bg-[#DDEEF3] h-screen md:h-[70vh] lg:h-[70vh] w-full md:w-[90%] lg:w-[70%] justify-betwee p-3 md:py-8 md:px-3 lg:p-14 md:rounded-3xl lg:rounded-3xl">
        <div className="flex">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center lg:gap-6">
          <img
            src={Image}
            alt="Image-404"
            className="md:w-[400px] lg:w-[600px]"
          />
          <div className="flex flex-col w-80 md:w-96 lg:w-96 gap-9">
            <p className="font-extrabold text-[#22A6B3] text-5xl md:text-6xl lg:text-8xl">
              Oops!
            </p>
            <p className="font-semibold text-[#22A6B3] text-lg md:text-xl lg:text-3xl leading-9">
              Laman yang Anda cari tidak ditemukan :(
            </p>
            <Link to="/" className="w-max bg-[#22A6B3] text-white font-bold rounded-xl px-8 py-3">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
