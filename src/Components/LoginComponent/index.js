import React from "react";

import "./style.css";

export default function Login({ formOpen }) {
  if (formOpen) {
    return (
      <div className="login">
        <h1>Acesse nossa Rede!</h1>
        <form>
          <input placeholder="Nick..." />
          <input placeholder="E-mail..." />
          <input placeholder="Senha..." />
          <button className="btnSubmit" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  } else {
    return <> </>;
  }
}
