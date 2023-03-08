import { Link } from "react-router-dom";

const Popup = ({ setModalOn, onClose }) => {
  const handleOKClick = () => {
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setModalOn(false);
  };

  return (
    <div className="animate-zoom-out bg-[rgba(0,0,0,0.5)] fixed inset-0 z-[99999]">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-4 px-8 rounded-2xl relative h-[25%] w-max">
          <button
            className="absolute outline-right-5 right-5 top-1 text-4xl text-gray-500"
            onClick={handleCancelClick}
          >
            &times;
          </button>
          <div className="flex text-2xl lg:text-4xl text-[#22A6B3] font-bold mt-12">
            Yakin ingin keluar ?
          </div>
          <div className="flex absolute right-8 bottom-6">
            <Link to="/">
              <button
                onClick={handleOKClick}
                className="rounded-xl px-9 py-2 text-white bg-green-500"
              >
                Ya
              </button>
            </Link>
            <button
              onClick={handleCancelClick}
              className="rounded-xl px-9 py-2 ml-4 text-white bg-red-500"
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
