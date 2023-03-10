import FtHipster from "../../assets/img/Hipster.png";

export default function PopUpHipster({ setShowHipster }) {
  return (
    <>
      <div className="animate-zoom-out flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
        <div className="relative mx-auto flex gap-3 max-w-xl bg-[#ffffff] rounded-2xl px-12 py-5 ">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="p-2"
                type="button"
                onClick={() => setShowHipster(false)}
              >
                X
              </button>
            </div>
            <div>
              <img src={FtHipster} alt="Hustler" className="m-auto" />
            </div>
            <h1 className="text-2xl text-[#22A6B3] text-center font-bold ">
              Hipster
            </h1>
            <p className="text-xl text-center">Si Desainer</p>
            <p className="">
              Seorang ahli di bidang desain pengalaman pengguna yang berfokus
              pada kesenangan pelanggan hingga perusahaan melalui visualisasi
              menarik serta interaksi yang baik.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
