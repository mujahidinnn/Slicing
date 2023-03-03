import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import profile from "../../assets/img/profile.jpg";
import ProjectModal from "./ProjectModal";
import { useStateContext } from "../../context/StateContext";
import EmailModal from "./EmailModal";

const ProjectCard = ({
  title,
  program,
  category,
  desc,
  hacker,
  hipster,
  project,
}) => {
  const { projectModal, setProjectModal, emailModal, setEmailModal } =
    useStateContext();
  const [data, setData] = useState([]);

  const getData = (title, program, category, desc, hacker, hipster) => {
    let tempData = [title, program, category, desc, hacker, hipster];
    setData((item) => [1, tempData]);

    return setProjectModal(true);
  };

  return (
    <div className="w-[48%] h-[300px] bg-[#FCFBFF] rounded-xl p-2">
      <div className="flex w-full justify-between px-8 font-semibold  items-center mt-2">
        <p className="tracking-wider text-teal-500">{program}</p>
        <span className="text-[13px] bg-teal-100 p-1 rounded-xl w-[80px] text-center text-teal-500">
          Dibuka
        </span>
      </div>

      <div className="px-10 py-3 mt-2">
        <h1 className="text-[19px] font-bold">{title}</h1>
        <p>{category}</p>

        <article className="mt-3">
          <p className="text-gray-500">
            {desc} &nbsp;
            <a className="text-teal-500 font-semibold cursor-pointer">
              ...Baca Selengkapnya
            </a>
          </p>
        </article>

        <div className="flex px-2 mt-3 items-center gap-[15px]">
          <SlMagnifier className="text-gray-500 font-semibold" />
          <b>
            {hacker} Hacker, {hipster} Hipster
          </b>
        </div>

        <hr className="mt-5 border-[1px]" />
      </div>

      <div className="flex w-full px-8 justify-between">
        <div className="flex relative w-[60%]">
          <img
            src={profile}
            alt="profile"
            className="w-[32px] rounded-[50%] z-10 absolute top-1 left-0 border-white border-2 opacity-60"
          />
          <img
            src={profile}
            alt="profile"
            className="w-[32px] rounded-[50%] z-20 absolute top-1 left-[15px] border-white border-2 opacity-80"
          />
          <img
            src={profile}
            alt="profile"
            className="w-[32px] rounded-[50%] z-30 absolute top-1 left-[32px] border-white border-2"
          />
          <p className="text-teal-500 text-[14px] self-center ml-[4.5rem]">
            69 Orang Mendaftar
          </p>
        </div>

        <div className="flex justify-end items-center w-[30%]">
          <button
            className="py-2 w-full bg-teal-500 text-white rounded-lg"
            onClick={() =>
              getData(title, program, category, desc, hacker, hipster)
            }
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {projectModal ? <ProjectModal {...project} /> : null}

      {emailModal ? <EmailModal />:null}
    </div>
  );
};

export default ProjectCard;
