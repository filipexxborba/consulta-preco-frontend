import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Loading from "../Loading/Loading";

const Enviopopup = () => {
  const {
    setIsSending,
    listaProdutos,
    setListaProdutos,
    filial,
    emailsArray,
    apiUrl,
  } = React.useContext(GlobalContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSucessfully, setIsSucessfully] = React.useState(false);

  async function sendEmail(lista, email, filial) {
    console.log(lista, email, filial);
    const response = await fetch(`${apiUrl}api/email/`, {
      method: "POST",
      body: JSON.stringify({
        emailDestino: emailsArray[filial],
        listaEtiquetas: listaProdutos,
        filial: filial,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const status = await response.status;
    if (status === 200) {
      setIsLoading(false);
      setIsSucessfully(true);
    }
    console.log(status);
  }

  const handleWarningYes = (event) => {
    event.preventDefault();
    setIsLoading(true);
    sendEmail(listaProdutos, emailsArray[filial], filial);
  };
  const handleWarningNo = (event) => {
    event.preventDefault();
    setIsSending(false);
  };

  const handleWarningOk = (event) => {
    event.preventDefault();
    let temp = [];
    localStorage.setItem("listaDeProdutos", JSON.stringify(temp));
    setListaProdutos(temp);
    window.location.reload();
  };
  return (
    <>
      {!isLoading && !isSucessfully ? (
        <div className="popup">
          <div className="popup__container">
            <h2>Atenção</h2>
            <p>Deseja realmente enviar essa lista de itens?</p>
          </div>
          <div className="row">
            <button onClick={handleWarningYes}>Sim</button>
            <button onClick={handleWarningNo}>Não</button>
          </div>
        </div>
      ) : null}
      {isLoading ? <Loading /> : null}
      {isSucessfully ? (
        <div className="popup">
          <div className="popup__container">
            <h2>Atenção</h2>
            <p>Lista de itens enviada para o e-mail com sucesso.</p>
          </div>
          <div className="row">
            <button className="sucessfully" onClick={handleWarningOk}>
              Voltar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Enviopopup;
