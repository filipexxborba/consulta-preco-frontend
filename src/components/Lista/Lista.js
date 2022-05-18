import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./Lista.css";

const Lista = () => {
  const {
    listaProdutos,
    setIsDeleting,
    setTempListaProdutos,
    setIsSending,
    setNaoEncontrado,
  } = React.useContext(GlobalContext);

  function handleDeleteItem(event) {
    let currentIndex = event.target.getAttribute("data-index");
    let temp = JSON.parse(localStorage.getItem("listaDeProdutos"));
    temp.splice(currentIndex, 1);
    setIsDeleting(true);
    setTempListaProdutos(temp);
  }

  function handleSendClick(event) {
    event.preventDefault();
    setIsSending(true);
  }

  return (
    <>
      <div className="lista container">
        <div className="titulo">
          <h2>Etiquetas para impressão</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={handleSendClick}
          >
            <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
          </svg>
        </div>
        <p className="info">
          Para excluir um item pressione 2x em cima do mesmo.
        </p>
        <div className="lista__wrapper">
          <div className="row">
            <h3>Código</h3>
            <h3>Descrição</h3>
            <h3>Valor</h3>
          </div>
          {listaProdutos &&
            listaProdutos.map((item, index) => (
              <div
                className="row item"
                key={index}
                onDoubleClick={handleDeleteItem}
                data-index={index}
              >
                <p data-index={index}>{item.codigo}</p>
                <p data-index={index}>{item.nome}</p>
                <p data-index={index}>{item.valor}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Lista;
