import  { useState } from "react";
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
    <div className=" w-full lg:w-[48%] lg:h-[300px]  bg-[#FCFBFF] rounded-xl p-2">
      <div className="flex w-full justify-between px-8 font-semibold  items-center mt-2">
        <p className="tracking-wider text-teal-500">{program}</p>
        <span className="text-[13px] bg-teal-100 p-1 rounded-xl w-[80px] text-center text-teal-500">
          Dibuka
        </span>
      </div>

      <div className="px-5 py-3 mt-2">
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

      <div className="flex flex-col md:flex-row gap-3 justify-between leading-7 mt-3 px-5">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-4 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-[#ffff]"
              src={profile}
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-[#ffff]"
              src={profile}
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-[#ffff]"
              src={profile}
              alt=""
            />
          </div>
          <p className="text-teal-500 text-sm">69 Orang mendaftar</p>
        </div>

        <button
          className="w-max md:w-auto flex bg-teal-500 text-white px-2 py-1 md:py-0 cursor-pointer rounded-xl text-base items-center"
          onClick={() =>
            getData(title, program, category, desc, hacker, hipster)
          }
        >
          Lihat Detail
        </button>
      </div>

      {projectModal ? <ProjectModal {...project} /> : null}

      {emailModal ? <EmailModal /> : null}
    </div>
  );
};

export default ProjectCard;
