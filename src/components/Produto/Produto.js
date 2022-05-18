import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./Produto.css";
import ButtonImage from "./button.png";

const Produto = ({ nome, marca, valor, codigo, data }) => {
  const { listaProdutos, setListaProdutos } = React.useContext(GlobalContext);
  const handleAddList = (event) => {
    event.preventDefault();
    const produto = { nome: nome, valor: valor, codigo: codigo };
    let tempLista = listaProdutos;
    tempLista.push(produto);
    setListaProdutos(tempLista);
    localStorage.setItem("listaDeProdutos", JSON.stringify(tempLista));
    console.log(tempLista);
    window.location.reload();
  };

  return (
    <div className="produto container">
      <h2>Dados da busca:</h2>
      <div className="row">
        <div className="column">
          <h3>Produto</h3>
          <p>{nome}</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Marca</h3>
          <p>{marca}</p>
        </div>
        <div className="column">
          <h3>Data últ. Alter.</h3>
          <p>{data}</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Valor</h3>
          <p className="valor">{valor}</p>
        </div>
        <img src={ButtonImage} alt="Imagem do button" onClick={handleAddList} />
      </div>
    </div>
  );
};

export default Produto;
