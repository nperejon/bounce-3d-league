import React from "react";

import "./style.css";

export default function Register({ formOpen }) {
  if (formOpen) {
    return (
      <div className={"register"}>
        <h1>Acesse nossa Rede!</h1>
        <form>
          <div>
            <input placeholder="Nome..." />
            <input placeholder="Sobrenome..." />
          </div>
          <div>
            <input placeholder="Nick..." />
            <input placeholder="Avatar..." />
          </div>
          <input placeholder="E-mail..." />
          <input placeholder="Senha..." />
          <textarea placeholder="Sobre você..." />
          <button className="btnSubmit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    );
  } else {
    return <> </>;
  }
}
