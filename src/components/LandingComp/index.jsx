import { useState } from "react";
import Main from "./Main";
import Tentang from "./Tentang";
import Role from "./Role";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";
import PopupSuccess from "./PopupSuccess";

function LandingPage() {
  const [changeForm, setChangeForm] = useState(false);
  const [modal, setModal] = useState(false);

  const toogle = () => {
    setChangeForm(!changeForm);
  };
  const modalActive = () => {
    setModal(true);
  };
  const modalInactive = () => {
    setModal(false);
    setChangeForm(true);
  };
  const form = changeForm ? (
    <Login toogle={toogle} />
  ) : (
    <Register toogle={toogle} modal={modalActive} />
  );
  const text = changeForm ? "MASUK" : "DAFTAR";

  return (
    <div className="">
      <Main />
      <Tentang />
      <Role />
      <div className="sm:hidden px-5 mb-10 -mt-8">{form}</div>
      {modal ? <PopupSuccess toogle={modalInactive} /> : null}
      <Footer />
    </div>
  );
}

export default LandingPage;
