import { Link } from "react-router-dom";
import FtSuccees from "../../assets/img/Hacker.png";

export default function PopUpSuccess() {
  return (
    <>
      <div className="animate-zoom-out flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
        <div className="w-[90%] lg:w-[70%] xl:w-[50%] bg-white rounded-3xl pt-6 pb-8 m-auto relative">
          <p className="absolute right-5 top-3">
            <Link
              to="/dashboard/explore"
              className="text-gray-600 text-xl"
            >
              ✕
            </Link>
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <img
              src={FtSuccees}
              alt="Oppss, Sorry"
              className="w-[300px] h-[300px]"
            />
            <div className="text-center lg:text-left">
              <span className=" text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  font-extrabold ">
                Berhasil membuat proyek,
              </span>
              <br />
              <p className="text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  ">
                proyek anda akan muncul
              </p>
              <p className="text-[#22A6B3] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
                pada laman explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
