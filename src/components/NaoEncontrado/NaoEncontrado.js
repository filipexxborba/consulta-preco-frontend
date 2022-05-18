import React from "react";
import "./NaoEncontrado.css";

const NaoEncontrado = () => {
  return (
    <div className="erro container">
      <p>
        Não foi encontrado nenhum produto com esse código de barra, por favor,
        tente novamente.
      </p>
    </div>
  );
};

export default NaoEncontrado;
