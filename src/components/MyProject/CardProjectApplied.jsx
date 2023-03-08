import avatar from "../../assets/img/avatar-1.png";
import avatar2 from "../../assets/img/avatar-2.png";
import search from "../../assets/icons/search.svg";

const CardsProjectApplied = () => {
  const Card = [
    {
      program: "IA TALENT",
      nameproject: "Website Marketplace Barang Bekas",
      category: "Teknologi",
      desc: "Website ini bertujuan untuk menjadi wadah berbagai masyarakat lorem ipsum sit",
      need: "4 Hacker, 3 Hipster",
      avatarApplyer: [avatar, avatar2],
      applyer: "73",
      status: "Menunggu",
      bgStatus: "bg-neutral-500",
    },
    {
      program: "IA TALENT",
      nameproject: "Website Kursus Bahasa Inggris",
      category: "Pendidikan",
      desc: "Website ini bertujuan untuk menjadi wadah berbagai masyarakat lorem ipsum sit",
      need: "3 Hacker, 2 Hipster",
      avatarApplyer: [avatar, avatar2],
      applyer: "43",
      status: "Diterima",
      bgStatus: "bg-green-500",
    },
    {
      program: "IA TALENT",
      nameproject: "Website Panduan Olahraga",
      category: "Olahraga",
      desc: "Website ini bertujuan untuk menjadi wadah berbagai masyarakat lorem ipsum sit",
      need: "4 Hacker, 3 Hipster",
      avatarApplyer: [avatar, avatar2],
      applyer: "52",
      status: "Ditolak",
      bgStatus: "bg-rose-500",
    },
    {
      program: "IA TALENT",
      nameproject: "Website Arisan",
      category: "Trading",
      desc: "Websiteyarakat lorem ipsum sit",
      need: "5 Hacker, 4 Hipster, 2 Hustler",
      avatarApplyer: [avatar, avatar2],
      applyer: "33",
      status: "DiBatalkan",
      bgStatus: "bg-neutral-500",
    },
  ];
  return (
    <>
      {Card.map((data, index) => {
        return (
          <div key={index} className="w-full">
            <div className="flex flex-col bg-white p-5 rounded-lg w-full lg:h-[300px]">
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold text-md text-teal-500">
                  {data.program}
                </h4>
                <div className="rounded-full bg-teal-100 px-3 py-1 text-teal-500 text-xs md:text-lg flex items-center">
                  Dibuka
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800">{data.nameproject}</h3>
                <p className="font-normal leading-6 text-gray-800">{data.category}</p>
                <p className="font-light leading-5 mt-[13px] mb-[13px] text-gray-700">
                  {data.desc}
                  <span className="text-teal-500 font-medium cursor-pointer">
                    ...Baca Selengkapnya
                  </span>
                </p>
                <div className="flex leading-9 gap-2 items-center">
                  <img src={search} alt="lup icon" />
                  <p className="font-medium text-gray-700">{data.need}</p>
                </div>
              </div>
              <div className="bg-mainneutral h-px w-auto" />
              <div className="flex justify-between leading-7 mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-4 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={data.avatarApplyer[0]}
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={data.avatarApplyer[1]}
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-[#ffff]"
                      src={data.avatarApplyer[0]}
                      alt=""
                    />
                  </div>
                  <p className="text-teal-500 text-xs md:text-sm">
                    {data.applyer} Orang mendaftar
                  </p>
                </div>
                <div
                  className={`flex ${data.bgStatus} cursor-pointer text-white px-2 py-0 md:px-5 md:py-2 rounded-xl text-sm md:text-base items-center`}
                >
                  {data.status}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardsProjectApplied;
