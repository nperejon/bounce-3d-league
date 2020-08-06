import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.svg";
import SoccerPlayer from "../../assets/soccerplayer.svg";

import Register from "../../Components/RegisterComponent";
import Login from "../../Components/LoginComponent";

export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [inLogin, setInLogin] = useState(true);
  const [inRegister, setInRegister] = useState(false);

  function openForm() {
    setFormOpen(!formOpen);
  }

  function chooseInLogin() {
    setInRegister(false);
    setInLogin(true);
  }

  function chooseInRegister() {
    setInLogin(false);
    setInRegister(true);
  }

  function alternateNav() {
    if (inRegister) {
      return <Register formOpen={formOpen} />;
    } else {
      return <Login formOpen={formOpen} />;
    }
  }

  function verifySection() {
    var classes = "";
    if (formOpen) {
      if (inLogin) {
        classes = "visibleForm inLogin";
      } else {
        classes = "visibleForm";
      }
    } else {
      classes = classes + "hiddenForm";
    }

    return classes;
  }

  return (
    <div className="home-container noselect">
      <img className="soccerplayer" src={SoccerPlayer} alt="Soccer Player" />
      <img className="logo" src={Logo} onClick={openForm} alt="Logo" />
      <section className={verifySection()}>
        <div className="headerSection">
          <div className="choose">
            <p onClick={chooseInLogin} className={inLogin ? "activeNav" : null}>
              Login
            </p>
            <p
              onClick={chooseInRegister}
              className={inRegister ? "activeNav" : null}
            >
              Cadastro
            </p>
          </div>
          <div className="close" onClick={() => setFormOpen(false)}>
            X
          </div>
        </div>
        {alternateNav()}
      </section>
    </div>
  );
}
