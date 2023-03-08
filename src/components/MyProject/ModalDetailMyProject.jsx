import clock from "../..//assets/icons/clock.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/img/avatar-1.png";

const dataDetailCard = [
  {
    program: "IA TALENT",
    nameproject: "Website Marketplace Barang Bekas",
    category: "Teknologi",
    desc: "Website ini bertujuan untuk menjadi wadah berbagai masyarakat lorem ipsum sit",
    duration: "4 bulan",
    avatar: avatar,
    need: "4 Hacker, 3 hipster",
    descRekrutmen:
      "Hacker yang dibutuhkan front-end dan back-end.Framework yang digunakan adalah React. Diutamakan domisili Jogja. Hipster diutamakan memiliki pengalaman di UI/UX Designer. Harus bisa bekerjasama dalam tim.",
    nameFounder: "Vellya Riona",
    position: "Founder",
  },
];

const listDataPelamar = [
  {
    id: 1,
    avatar: avatar,
    name: "Vellya Riona",
    role: "Hacker",
    status1: "",
    status2: "Diterima",
    bgStatus1: "",
    bgStatus2: "bg-green-500",
    descStatus: "Menunggu konfirmasi",
    opacity: "opacity-50",
  },
  {
    id: 2,
    avatar: avatar,
    name: "Vellya Riona",
    role: "Hacker,hipster",
    status1: "Terima",
    status2: "Tolak",
    bgStatus1: "bg-green-500",
    bgStatus2: "bg-rose-500",
    descStatus: "",
    opacity: "",
  },
  {
    id: 3,
    avatar: avatar,
    name: "Vellya Riona",
    role: "Hacker,hipster",
    status1: "",
    status2: "Ditolak",
    bgStatus1: "",
    bgStatus2: "bg-rose-500",
    descStatus: "",
    opacity: "opacity-50",
  },
  {
    id: 4,
    avatar: avatar,
    name: "Vellya Riona",
    role: "Hacker",
    status1: "",
    status2: "Dibatalkan",
    bgStatus1: "",
    bgStatus2: "bg-rose-500",
    descStatus: "",
    opacity: "",
  },
  {
    id: 5,
    avatar: avatar,
    name: "Vellya Riona",
    role: "Hacker",
    status1: "",
    status2: "Diterima",
    bgStatus1: "",
    bgStatus2: "bg-green-500",
    descStatus: "Terkonfirmasi",
    opacity: "opacity-50",
  },
];

const ModalDetailMyProject = ({ setShowDetail }) => {
  return (
    <>
      {dataDetailCard.map((data, id) => {
        return (
          <div key={id}>
            <div className="animate-zoom-out bg-[rgba(0,0,0,0.5)] fixed inset-0 z-[99999] m-auto flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative  m-auto w-auto max-w-[96%] lg:max-w-[60%]">
                {/*content*/}
                <div className="bg-white flex w-full py-5 flex-col rounded-2xl border-0 shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between rounded-t border-solid border-slate-200">
                    <button
                      onClick={() => setShowDetail(false)}
                      className=" font-semiboldleading-none float-right ml-auto border-0 bg-transparent text-3xl text-black outline-none focus:outline-none"
                    >
                      <span className="mr-6 -mt-2 block text-4xl font-extralight text-black/50 outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative flex-auto px-6 max-h-[70vh]  overflow-y-scroll scrollbar-thin scrollbar-thumb-[rgba(153,153,153,0.45)] hover:scrollbar-thumb-[rgba(153,153,153,0.74)] scrollbar-track-[rgba(254,254,254,0.5)] scrollbar-thumb-rounded-xl">
                    <p className="text-cyan-500 font-semibold ml-2">
                      {data.program}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-black font-semibold pl-2">
                        {data.nameproject}
                      </p>
                      <p className="bg-cyan-100 text-xs font-medium items-center flex rounded-xl px-2 text-cyan-500">
                        Dibuka
                      </p>
                    </div>
                    <p className="text-gray-700 pl-2">{data.category}</p>
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-[50%] p-2">
                        <p className="my-3 text-gray-500">
                          {data.desc}
                          <span className="text-cyan-500 cursor-pointer">
                            {" "}
                            ...Baca Selengkapnya
                          </span>
                        </p>
                        <p className="text-cyan-500 font-medium">
                          Durasi Pengerjaan:
                        </p>
                        <div className="text-gray-900 flex items-center gap-1">
                          <img src={clock} alt="" className="w-5 h-5" />{" "}
                          <p>{data.duration}</p>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-3 mt-3">
                          <div className="flex gap-4">
                            <img
                              src={data.avatar}
                              alt=""
                              className="rounded-full w-12 h-12"
                            />
                            <div className="flex-col">
                              <p className="font-semibold text-gray-900">
                                {data.nameFounder}
                              </p>
                              <p className="font-normal text-gray-700">
                                {data.position}
                              </p>
                            </div>
                          </div>
                          <p className="text-cyan-500 font-semibold py-1">
                            Detail Rekrutmen:
                          </p>
                          <p className="flex gap-2 items-center py-2 text-gray-800">
                            <img src={search} alt="" /> 4 Hacker, 3 Hipster
                          </p>
                          <p className="text-gray-500">{data.descRekrutmen}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-[50%] px-2 mt-4">
                        <div className="flex gap-2 mb-3">
                          <p className="text-cyan-500 font-semibold text-lg">
                            Pelamar
                          </p>
                          <p className="bg-cyan-100 text-sm font-medium items-center flex rounded-xl px-2 text-cyan-500">
                            15 Hacker, 2 Hipster
                          </p>
                        </div>
                        <div className="flex border border-cyan-500 rounded-2xl justify-between w-[100%] my-3 py-2 px-4">
                          <input
                            type="text"
                            placeholder="Cari"
                            className="w-[92%] outline-none bg-transparent text-cyan-500"
                            spellCheck="false"
                          />
                          <img src={search} alt="search" />
                        </div>

                        {/* List Pelamar */}

                        {listDataPelamar.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="flex items-center justify-between py-3 mb-3 border-b border-gray-300">
                                <div className="flex gap-4">
                                  <img
                                    src={item.avatar}
                                    alt=""
                                    className={`w-14 h-14 rounded-full ${item.opacity}`}
                                  />
                                  <div className="flex-col">
                                    <p
                                      className={`font-semibold text-xs lg:text-base text-gray-800 ${item.opacity}`}
                                    >
                                      {item.name}
                                    </p>
                                    <p
                                      className={`text-gray-700 text-xs lg:text-base  ${item.opacity}`}
                                    >
                                      {item.role}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex-col">
                                  <div className="flex gap-2 float-right">
                                    <div
                                      className={`${item.bgStatus1} text-xs lg:text-base text-white h-max px-2 py-[2px] rounded-md lg:rounded-xl cursor-pointer w-max`}
                                    >
                                      {item.status1}
                                    </div>
                                    <div
                                      className={`${item.bgStatus2} text-xs lg:text-base text-white h-max px-2 py-[2px] rounded-md lg:rounded-xl cursor-pointer w-max`}
                                    >
                                      {item.status2}
                                    </div>
                                  </div>
                                  <p className="text-gray-500  text-xs lg:text-base">
                                    {item.descStatus}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* Button buka/tutup rekrutmen */}
                        <div className="mb-3 flex justify-center items-end border border-rose-500 text-rose-500 py-2 rounded-xl cursor-pointer">
                          Tutup Rekrutmen
                        </div>
                        <div className="flex justify-center items-end border border-green-500 text-green-500 py-2 rounded-xl cursor-pointer">
                          Buka Rekrutmen
                        </div>
                        {/*  */}
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ModalDetailMyProject;
