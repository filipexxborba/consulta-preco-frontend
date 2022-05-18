import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./ConfirmFilialPopup.css";

const ConfirmFilialPopup = () => {
  const { setIsChange, filiaisArray, setFilial, pularVer, setPularVer } =
    React.useContext(GlobalContext);
  const [showPopupFilial, setShowPopupFilial] = React.useState(false);
  const currentSelect = React.useRef();

  const handleWarningYes = (event) => {
    event.preventDefault();
    setFilial(0);
    setShowPopupFilial(true);
  };

  const handleWarningNo = (event) => {
    event.preventDefault();
    setIsChange(false);
  };

  const handleClickLogar = (event) => {
    event.preventDefault();
    if (currentSelect.current.value !== 0) {
      localStorage.setItem("filial", currentSelect.current.value);
      setFilial(currentSelect.current.value);
      setIsChange(false);
      setPularVer(false);
    }
  };

  return (
    <>
      {!showPopupFilial && !pularVer ? (
        <div className="popup">
          <div className="popup__container">
            <h2>Atenção</h2>
            <p>Deseja realmente redefinir todas as configurações?</p>
          </div>
          <div className="row">
            <button onClick={handleWarningYes}>Sim</button>
            <button onClick={handleWarningNo}>Não</button>
          </div>
        </div>
      ) : null}
      {showPopupFilial || pularVer ? (
        <div className="popup">
          <div className="popup__container">
            <h2>Escolha a filial:</h2>
            <select name="filial" ref={currentSelect}>
              {filiaisArray.map((item, index) => (
                <option key={index} value={index}>
                  {item}
                </option>
              ))}
            </select>
            <button onClick={handleClickLogar} className="button login">
              Entrar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmFilialPopup;
