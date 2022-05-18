import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const ExcluirPopup = () => {
  const { setListaProdutos, setIsDeleting, tempListaProdutos } =
    React.useContext(GlobalContext);

  const handleWarningYes = (event) => {
    event.preventDefault();
    setListaProdutos(tempListaProdutos);
    localStorage.setItem("listaDeProdutos", JSON.stringify(tempListaProdutos));
    window.location.reload();
  };
  const handleWarningNo = (event) => {
    setIsDeleting(false);
  };
  return (
    <div className="popup">
      <div className="popup__container">
        <h2>Atenção</h2>
        <p>Deseja realmente excluir esse item da lista?</p>
      </div>
      <div className="row">
        <button onClick={handleWarningYes}>Sim</button>
        <button onClick={handleWarningNo}>Não</button>
      </div>
    </div>
  );
};

export default ExcluirPopup;
