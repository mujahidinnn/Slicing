import { useState } from "react";
import avatar from "../../assets/img/avatar-2.png";
import search from "../../assets/icons/search.svg";
import ModalDetailMyProject from "./ModalDetailMyProject";

const projectIMade = [
  {
    program: "IA TALENT",
    nameproject: "Website Marketplace Barang Bekas",
    category: "Teknologi",
    desc: "Website ini bertujuan untuk menjadi wadah berbagai masyarakat lorem ipsum sit",
    need: "4 Hacker, 3 Hipster",
    avatarApplyer: avatar,
    applyer: "73",
  },
];

const CardProjectIMade = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      {projectIMade.map((item, id) => {
        return (
          <div key={id}>
            <div className="flex flex-col max-w-xl bg-white p-5 rounded-lg">
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold text-md text-teal-500">
                  {item.program}
                </h4>
                <div className="flex items-center cursor-pointer rounded-full bg-teal-100 px-2 py-1 md:px-3 md:py-1 text-teal-500 text-xs md:text-lg">
                  Dibuka
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800">{item.nameproject}</h3>
                <p className="font-normal leading-6 text-gray-800">{item.category}</p>
                <p className="font-light leading-5 mt-[13px] mb-[13px] text-gray-700">
                  {item.desc}
                  <span
                    onClick={() => setShowDetail(true)}
                    className="text-teal-500 font-medium cursor-pointer"
                  >
                    ...Baca Selengkapnya
                  </span>
                </p>
                <div className="flex leading-9 gap-2 items-center">
                  <img src={search} alt="lup icon" />
                  <p className="font-medium text-gray-700">{item.need}</p>
                </div>
              </div>
              <div className="bg-slate-200 h-px w-auto" />
              <div className="flex flex-col md:flex-row gap-3 justify-between leading-7 mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-4 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={item.avatarApplyer}
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={item.avatarApplyer}
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={item.avatarApplyer}
                      alt=""
                    />
                  </div>
                  <p className="text-teal-500 text-sm">
                    {item.applyer} Orang mendaftar
                  </p>
                </div>
                <div
                  onClick={() => setShowDetail(true)}
                  className="w-max md:w-auto flex bg-teal-500 text-white px-2 py-1 md:py-0 cursor-pointer rounded-xl text-base items-center"
                >
                  Lihat Detail
                </div>
                {/* Popup Lihat Detail */}
                {showDetail && (
                  <ModalDetailMyProject setShowDetail={setShowDetail} />
                )}
                {/* Popup Lihat Detail */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProjectIMade;
