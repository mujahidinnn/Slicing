import React, { useState } from "react";
import { v4 as id } from "uuid";
import PopUpHipster from "./PopUpHipster";
import PopUpHacker from "./PopUpHacker";
import PopUpHustler from "./PopUpHustler";
import Succees from "./PopUpSuccees";

export default function CreateProject() {
  // ~~~Left~~~
  const [judulProject, setJudulProject] = useState("");
  const [dataJudulProject, setDataJudulProject] = useState([]);
  const [namaProgram, setNamaProgram] = useState("");
  const [dataNamaProgram, setDataNamaProgram] = useState([]);
  const [deskripsiProject, setDeskripsiProject] = useState("");
  const [dataDeskripsiProject, setDataDeskripsiProject] = useState([]);
  const [detailRekutmen, setDetailRekutmen] = useState("");
  const [dataDetailRekutmen, setDataDetailRekutmen] = useState([]);
  const [kategori, setKategori] = useState();
  const [data, setData] = useState();

  // Kategori
  const [inputLainnya, setInputLainnya] = useState("");

  // durasi
  const [durasiPengerjaan, setDurasiPengerjaan] = useState(0);

  // ~~~Right~~~
  const [hustler, setHustler] = useState(0);
  const [hacker, setHacker] = useState(0);
  const [hipster, setHipster] = useState(0);
  const [showHipster, setShowHipster] = useState(0);
  const [showHackers, setShowHackers] = useState(0);
  const [showHustler, setShowHustler] = useState(0);
  const [showSuccees, setShowSuccees] = useState(false);

  function kode() {
    return id;
  }

  // `~`~`~`~`~`~`~`~function~`~`~`~`~`~`~`~`
  // ~~~Left~~~
  const durasiPlus = (e) => {
    e.preventDefault();
    setDurasiPengerjaan(durasiPengerjaan + 1);
  };
  const durasiMint = (e) => {
    e.preventDefault();
    if (durasiPengerjaan <= 0) {
      return false;
    } else {
      setDurasiPengerjaan(durasiPengerjaan - 1);
    }
  };

  // ~~~Right~~~
  const hustlerPlus = (e) => {
    e.preventDefault();
    setHustler(hustler + 1);
  };
  const hustlerMint = (e) => {
    e.preventDefault();
    if (hustler <= 0) {
      return false;
    } else {
      setHustler(hustler - 1);
    }
  };
  const hackerplus = (e) => {
    e.preventDefault();
    setHacker(hacker + 1);
  };
  const hackerMint = (e) => {
    e.preventDefault();
    if (hacker > 0) {
      setHacker(hacker - 1);
    }
  };
  const hipsterplus = (e) => {
    e.preventDefault();
    setHipster(hipster + 1);
  };
  const hipsterMint = (e) => {
    e.preventDefault();
    if (hipster > 0) {
      setHipster(hipster - 1);
    }
  };

  function saveData(e) {
    e.preventDefault();

    {
      setDataJudulProject(judulProject);
      setDataNamaProgram(namaProgram);
      setDataDeskripsiProject(deskripsiProject);
      setDataDetailRekutmen(detailRekutmen);
    }
    const kumpulanData = [
      dataJudulProject,
      dataNamaProgram,
      kategori,
      dataDeskripsiProject,
      durasiPengerjaan,
      hustler,
      hacker,
      hipster,
      dataDetailRekutmen,
    ];
    setJudulProject("");
    setNamaProgram("");
    setKategori("");
    setDurasiPengerjaan(0);
    setDeskripsiProject("");
    setHustler(0);
    setHacker(0);
    setHipster(0);
    setDetailRekutmen("");
    setData(kumpulanData);
    setShowSuccees(true);
    return;
  }
  function Hipsters(e) {
    e.preventDefault();

    setShowHipster(true);
  }
  function Hackers(e) {
    e.preventDefault();

    setShowHackers(true);
  }
  function Hustlers(e) {
    e.preventDefault();

    setShowHustler(true);
  }
  function Modalsss(e) {
    e.preventDefault();

    setShowSuccees(true);
  }
  return (
    <>
      {/* pembungkus */}
      <div className="pr-[100px] pl-[200px] bg-[#D8D8D8] max-w-screen-2x m-auto h-screen">
        {/* Create Project */}
        <p className="pt-[49px] text-5xl font-bold ">Buat Proyek</p>
        <form onSubmit={saveData} className=" flex justify-between ">
          <div>
            <p className="text-2xl text-[#22A6B3] font-bold mt-[45px]">
              Tentang Proyek
            </p>
            <br />

            {/* judul project */}
            <div>
              <p className="font-bold">
                {" "}
                Judul Proyek <span className="text-[#F63333]">*</span>
              </p>
              <input
                type="text"
                value={judulProject}
                onChange={(e) => setJudulProject(e.target.value)}
                placeholder="Berikan judul singkat untuk Projectmu"
                className=" px-2 border border-[#22A6B3] outline-none rounded-md w-96"
              />

              {/* Nama Program */}
              <p className="font-bold mt-4">
                {" "}
                Nama Program <span className="text-[#F63333]">*</span>
              </p>
              <input
                type="text"
                value={namaProgram}
                onChange={(e) => setNamaProgram(e.target.value)}
                placeholder="Program yang di ikuti dalam pengadaan project ini"
                className=" px-2 border border-[#22A6B3] outline-none rounded-md w-96"
              />

              {/* Kategori */}
              <p className="font-bold mt-4">
                {" "}
                Kategori <span className="text-[#F63333]">*</span>
              </p>
              <div className="grid grid-rows-1 grid-flow-col gap-5">
                <div>
                  <input
                    type="radio"
                    name="kategori"
                    value="Pendidikan"
                    onChange={(e) => setKategori(e.target.value)}
                    checked={kategori === "Pendidikan"}
                  />{" "}
                  <label>Pendidikan</label>
                  <br />
                  <br />
                  <input
                    type="radio"
                    name="kategori"
                    value="Kesehatan"
                    onChange={(e) => setKategori(e.target.value)}
                    checked={kategori === "Kesehatan"}
                  />{" "}
                  <label>Kesehatan</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="kategori"
                    value="Perdagangan"
                    onChange={(e) => setKategori(e.target.value)}
                    checked={kategori === "Perdagangan"}
                  />{" "}
                  <label>Perdagangan</label>
                  <br />
                  <br />
                  <input
                    type="radio"
                    name="kategori"
                    value="Teknologi"
                    onChange={(e) => setKategori(e.target.value)}
                    checked={kategori === "Teknologi"}
                  />{" "}
                  <label>Teknologi</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="kategori"
                    value="Lainnya"
                    onChange={(e) => setKategori(e.target.value)}
                    checked={kategori === "Lainnya"}
                  />{" "}
                  <label> Lainnya:</label>
                  <br />
                  <br />
                  <input
                    type="text"
                    name="kategori"
                    value={inputLainnya}
                    onChange={(e) => {
                      setInputLainnya(e.target.value);
                      console.log(inputLainnya);
                    }}
                    // placeholder="Tulis apa yang di maksud"
                    className="px-2 border-b-[1px] w-[70%] border-b-black  bg-transparent outline-none"
                  />{" "}
                  <label> </label>
                </div>
              </div>

              {/* Durasi project */}
              <p className="mt-5 font-bold">Durasi Pengerjaan</p>
              <div className="mt-2">
                <button
                  type="submit"
                  onClick={durasiMint}
                  className="border border-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3] p-[10px] rounded-l-[10px]"
                >
                  -
                </button>
                <span
                  type="submit"
                  className="border border-y-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3] p-[10px]"
                >
                  {durasiPengerjaan}
                </span>
                <button
                  type="submit"
                  onClick={durasiPlus}
                  className="border border-[#22A6B3] bg-[#FCFBFF] text-[#22A6B3] p-[10px] rounded-r-[10px] mr-5"
                >
                  +{" "}
                </button>
                <span>Bulan</span>
              </div>
              <br />

              {/* Deskripsi */}
              <p className="font-bold">
                Deskripsi Proyek<span className="text-[#F63333]">*</span>
              </p>
              <textarea
                type="text"
                value={deskripsiProject}
                onChange={(e) => setDeskripsiProject(e.target.value)}
                placeholder="Ceritakan selengkapnya mengenai detail proyek yang kamu buat"
                className="w-[100%] h-[126px] px-2 py-1 border border-[#22A6B3] rounded-lg outline-none"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>
          <div>
            {/* Role yang dibutuhkan dalam project */}
            <p className="text-2xl text-[#22A6B3] font-bold w-max mt-[45px]">
              Tentang Rekrutmen
            </p>
            <br />
            <div className="a">
              <p className="font-[500]">
                Personil yang di butuhkan{" "}
                <span className="text-[#F63333]">*</span>
              </p>
              <div className="pt-5">
                <button
                  type="submit"
                  onClick={hustlerMint}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-l-[10px]"
                >
                  -
                </button>
                <span
                  type="submit"
                  className="border border-y-[#22A6B3] p-[10px] text-[#22A6B3] bg-[#FCFBFF]"
                >
                  {hustler}
                </span>
                <button
                  type="submit"
                  onClick={hustlerPlus}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-r-[10px]"
                >
                  +
                </button>
                <button className="ml-2">
                  {" "}
                  Sebagai{" "}
                  <a href="/" onClick={Hustlers} className="text-[#22A6B3]">
                    Hustler
                  </a>
                </button>
                {showHustler ? (
                  <PopUpHustler setShowHustler={setShowHustler} />
                ) : null}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  onClick={hackerMint}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-l-[10px]"
                >
                  -
                </button>
                <span
                  type="submit"
                  className="border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px]"
                >
                  {hacker}
                </span>
                <button
                  type="submit"
                  onClick={hackerplus}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-r-[10px]"
                >
                  +
                </button>
                <button className="ml-2">
                  {" "}
                  Sebagai{" "}
                  <a href="/" onClick={Hackers} className="text-[#22A6B3]">
                    Hacker
                  </a>
                </button>
                {showHackers ? (
                  <PopUpHacker setShowHackers={setShowHackers} />
                ) : null}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  onClick={hipsterMint}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-l-[10px]"
                >
                  -
                </button>
                <span
                  type="submit"
                  className="border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px]"
                >
                  {hipster}
                </span>
                <button
                  type="submit"
                  onClick={hipsterplus}
                  className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-[10px] rounded-r-[10px]"
                >
                  +
                </button>
                <button className="ml-2">
                  {" "}
                  Sebagai{" "}
                  <a href="/" onClick={Hipsters} className="text-[#22A6B3] ">
                    Hipster
                  </a>
                </button>
                {showHipster ? (
                  <PopUpHipster setShowHipster={setShowHipster} />
                ) : null}
              </div>
              <br />
              <p className="font-[500] mb-2">
                Detail Rekrutmen <span className="text-[#F63333]">*</span>
              </p>

              {/* Detail role */}
              <textarea
                type="text"
                value={detailRekutmen}
                onChange={(e) => setDetailRekutmen(e.target.value)}
                placeholder="Ceritakan detail rekrutmen dan persyaratan"
                className="w-[400px] h-[126px] px-2 py-1 border border-[#22A6B3] rounded-lg outline-none bg-[#FCFBFF]"
                style={{ resize: "none" }}
              ></textarea>
            </div>

            {/* Unggah project */}
            <button
              type="submit"
              className="bg-[#22A6B3] px-3 py-1 rounded-lg text-[#FCFBFF] mt-5"
              onClick={Modalsss}
            >
              Unggah project
            </button>
            {showSuccees ? <Succees /> : null}
          </div>
        </form>
      </div>
      <ul className="m-auto max-w-screen-2x">{data}</ul>
    </>
  );
}
