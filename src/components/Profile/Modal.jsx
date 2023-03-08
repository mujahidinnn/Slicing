import { Link } from "react-router-dom";
import logo2 from "../../../src/assets/img/popup.png";

const Modal = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="animate-zoom-out bg-[rgba(0,0,0,0.25)] fixed inset-0 z-[99999] flex justify-center items-center"
    >
      <div className="relative bg-white p-5 rounded-3xl w-[80%] md:w-[60%] lg:w-[50%]">
        <Link to="/dashboard/myprofile">
          <button
            onClick={onClose}
            className="absolute outline-none right-5 text-[35px] text-gray-600"
          >
            &times;
          </button>
        </Link>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center">
          <img src={logo2} alt="logo silang" />
          <p className="text-lg lg:text-2xl text-[#22A6B3]">
            <span className="font-bold">
              Berhasil memperbarui profil.
              <br />
            </span>
            Pastikan profil anda selalu terupdate sebelum melamar proyek.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
