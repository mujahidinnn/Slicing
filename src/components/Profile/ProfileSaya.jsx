import { Link } from "react-router-dom";
import edtf from "../../../src/assets/icons/Edit.svg";
import edtp from "../../../src/assets/icons/Edit.svg";
import gml from "../../../src/assets/icons/Pesan.svg";
function ProfileSaya() {
  return (
    <div className="bg-slate-100 h-full xl:h-screen">
      <div className="flex justify-between pt-20 px-2">
        <h1 className="text-4xl font-semibold mb-[30px] px-2">Profil Saya</h1>
        <Link to="/dashboard/editprofile" className="pr-4">
          <div className="bg-[#22A6B3] rounded-lg px-2 flex items-center h-10 gap-2">
            <img src={edtp} alt="tombol edit profil" className="w-6" />
            <p className="text-[#FCFBFF] hidden md:block">Edit Profile Saya</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-4 pt-4">
        <div className="rounded-[20px] bg-[#DDEEF3] w-full p-5">
          <div className="flex">
            <div className="bg-green-400 rounded-full w-[90px] h-[90px] pt-[67px] pl-14">
              <img
                src={edtf}
                alt="tombol edit foto profil"
                className="w-7 bg-[#393939] rounded-lg"
              />
            </div>
            <div className="textProfil px-5 py-5">
              <p className="font-semibold text-xl">Ahmmad Arizal Fikri</p>
              <p>Kategori</p>
            </div>
          </div>
          <div className="text-profil py-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              placeat officiis eaque reprehenderit incidunt nam accusantium
              labore, necessitatibus tenetur non, hic ea suscipit saepe
              aspernatur. Error repellat incidunt ab quasi officia omnis quas
              eaque, itaque repellendus accusantium et saepe, aperiam ratione
              fugiat voluptatibus veritatis maxime in. Eligendi, maiores iure.
              Libero ad explicabo, sint possimus harum enim nobis sunt
              cupiditate perspiciatis earum maxime quaerat ducimus! Praesentium
              enim soluta quaerat minima eveniet asperiores illo minus
              molestiae.
            </p>
            <br />
            <div className="flex">
              <img src={gml} alt="logo pesan gmail" />
              <a href="/" className=" pl-2 text-[#22A6B3]">
                fa28824@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* content-rigth */}
        <div>
          <div>
            <h1 className="font-semibold text-xl text-[#22A6B3]">Pendidikan</h1>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quisquam iste molestiae praesentium sequi, recusandae accusamus
              asperiores,Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Doloremque, nam perspiciatis ipsum optio vitae, non quam
              deleniti, autem consectetur voluptatibus soluta. Quibusdam nisi
              voluptatem blanditiis officiis molestias ut dolorum laudantium.
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold text-xl text-[#22A6B3]">Pengalaman</h1>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quisquam iste molestiae praesentium sequi, recusandae accusamus
              asperiores,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum beatae doloribus illum itaque, at veniam rerum aliquid
              inventore magnam sit maiores laboriosam minima unde veritatis
              officiis nostrum recusandae necessitatibus natus,Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Suscipit doloremque minus
              laborum eos doloribus quis? Asperiores deserunt fugiat, culpa,
              nemo magnam error soluta officiis voluptatum doloribus, velit
              provident voluptate amet?
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold text-xl text-[#22A6B3]">Skill</h1>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quisquam iste molestiae praesentium sequi, recusandae accusamus
              asperiores,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore delectus totam odio vitae sit quibusdam praesentium
              hic perferendis, voluptatem error accusantium temporibus at cumque
              natus officiis quo sunt, deleniti nihil!
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold text-xl text-[#22A6B3]">Portofolio</h1>
            <p>
              Link Portfolio Saya: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Iste autem ratione ex iure magnam quam commodi
              officiis nulla rerum vel voluptate veritatis alias reiciendis
              possimus, nobis ipsam! Voluptatibus, debitis possimus!
            </p>
          </div>
        </div>
      </div>
      <div className="h-[5vh] lg:h-0"/>
    </div>
  );
}

export default ProfileSaya;
