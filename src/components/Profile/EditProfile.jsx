import React, { useState } from "react";
import ugh from "../../../src/assets/icons/Unggah.svg";
import Modal from "./Modal";

function EditProfile() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [pengalaman, setPengalaman] = useState("");
  const [skil, setSkil] = useState("");
  const [portofolio, setPortofolio] = useState("");
  const [showModal, setShowModal] = useState(false);

  const hanleOnClose = () => setShowModal(false);

  // fuction Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nama);
  };

  return (
    <div className="">
      <div className="px-[10%] pt-12">
        <h1 className="text-5xl font-semibold mb-[30px]">Edit Profil Saya</h1>
      </div>

      <div className="flex justify-between pl-[10%] pt-6 pr-[3%] ">
        <div className="">
          <p className="font-semibold text-xl text-[#22A6B3]">Identitas</p>
          <br />
          <p className="pb-[7px] text-base font-medium">Foto Profil</p>
          <button className="flex px-2 py-2 gap-[5px] rounded-lg w-[155px] h-[44px] border-2 border-[#22A6B3] text-[#22A6B3] bg-[#DDEEF3]">
            <img src={ugh} className="" />
            Unggah File
          </button>

          <br />

          <div>
            <div>
              <p className="pb-2">
                Nama Lengkap<span className="text-[#F63333]">*</span>
              </p>
              <input
                type="text"
                placeholder="Tulikan Nama Lengkap Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-[700px] h-[49px] pl-4 rounded-lg border border-[#22A6B3] outline-none"
              />
            </div>

            <br />

            <div>
              <p className="pb-2">
                Email<span className="text-[#F63333]">*</span>
              </p>
              <input
                type="email"
                placeholder="Tulikan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] h-[49px] pl-4 rounded-lg border border-[#22A6B3] outline-none"
              />
            </div>

            <br />

            <div>
              <p className="pb-2">Bio</p>
              <textarea
                placeholder="ceritakan selengkapnya mengenai diri anda"
                className="w-[100%] h-[126px] pl-4 pt-4 rounded-lg border border-[#22A6B3] outline-none resize-none"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
          </div>

          <br />

          <div className="">
            <p className="pb-2">Terbuka untuk Posisi:</p>
            <button className="w-[96px] h-[32px] rounded-lg border border-[#22A6B3] text-[#22A6B3]">
              Hustler
            </button>
            <button className="w-[96px] h-[32px] rounded-lg border border-[#22A6B3] text-[#22A6B3] mx-3">
              Hacker
            </button>
            <button className="w-[96px] h-[32px] rounded-lg border border-[#22A6B3] text-[#22A6B3]">
              Hipster
            </button>
          </div>
        </div>
        {/* content rigth */}
        <div className="">
          <p className="font-semibold text-xl text-[#22A6B3]">Lain-lain</p>
          <br />

          <div className="">
            <p className="pb-2">Pendidikan</p>
            <textarea
              placeholder="Masukan riwayat pendidikan anda berserta Universitas"
              className="w-[820px] h-[81px] pl-4 pt-4 rounded-lg border border-[#22A6B3] outline-none resize-none"
              value={pendidikan}
              onChange={(e) => setPendidikan(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-3">
            <p className="pb-2">Pengalaman</p>
            <textarea
              placeholder="Masukan riwayat pengalaman anda "
              className="w-[820px] h-[135px] pl-4 pt-4 rounded-lg border border-[#22A6B3] outline-none resize-none"
              value={pengalaman}
              onChange={(e) => setPengalaman(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-3">
            <p className="pb-2">Skill</p>
            <textarea
              placeholder="Masukan skill anda"
              className="w-[820px] h-[89px] pl-4 rounded-lg border border-[#22A6B3] outline-none resize-none"
              value={skil}
              onChange={(e) => setSkil(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-3">
            <p className="pb-2">Portofolio</p>
            <input
              type="text"
              placeholder="Tulikan link portofolio Anda"
              className="w-[820px] h-[49px] pl-4 rounded-lg border border-[#22A6B3] outline-none"
              value={portofolio}
              onChange={(e) => setPortofolio(e.target.value)}
            />
          </div>
          <br />

          <div className="bg-[#22A6B3] rounded-lg ml-[620px]  mt-8 w-[199px] px-5 py-3">
            <button
              onClick={() => setShowModal(true)}
              className=" text-[#FCFBFF]"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
        <Modal onClose={hanleOnClose} visible={showModal} />
      </div>
    </div>
  );
}

export default EditProfile;
