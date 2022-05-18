import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./Input.css";

const Input = () => {
  const {
    apiUrl,
    filial,
    setCurrentProduto,
    setIsLoadingProduto,
    setNaoEncontrado,
    setDebuggingCod,
  } = React.useContext(GlobalContext);
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef();
  const handleDelete = (event) => {
    event.preventDefault();
    setInputValue("");
    inputRef.current.focus();
  };

  async function getInfoProduto(filial, codbar) {
    const response = await fetch(`${apiUrl}api/codbarra/${codbar}&${filial}`, {
      method: "POST",
    });
    const responseJson = await response.json();
    console.log(responseJson.length);
    if (responseJson.length !== 0) {
      // Formatação do valor
      let valorString = responseJson[0][6];
      let valorFormatado = valorString.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      // Formatação da data
      let valorData = new Date(responseJson[0][7]);
      let dataFormatada = valorData.toLocaleDateString("pt-br");

      setCurrentProduto({
        nome: responseJson[0][0],
        codigo: responseJson[0][1],
        marca: responseJson[0][2],
        valor: valorFormatado,
        data: dataFormatada,
      });
      setNaoEncontrado(false);
    } else {
      setNaoEncontrado(true);
    }

    setIsLoadingProduto(false);
  }
  setDebuggingCod(inputValue);
  if (inputValue.length === 12 && inputValue.startsWith("28")) {
    let current = inputValue.toString();
    let edited = current.slice(0, -1);
    edited = `0${edited}`;
    setIsLoadingProduto(true);
    getInfoProduto(filial, edited);
    setInputValue("");
    inputRef.current.focus();
  }
  if (inputValue.length === 12 && inputValue.startsWith("24")) {
    setIsLoadingProduto(true);
    getInfoProduto(filial, inputValue);
    setInputValue("");
    inputRef.current.focus();
  }
  if (inputValue.length === 12 && inputValue.startsWith("8")) {
    setIsLoadingProduto(true);
    getInfoProduto(filial, inputValue);
    setInputValue("");
    inputRef.current.focus();
  }
  if (inputValue.length === 12 && inputValue.startsWith("74")) {
    setIsLoadingProduto(true);
    getInfoProduto(filial, inputValue);
    setInputValue("");
    inputRef.current.focus();
  }

  if (inputValue.length === 11 && inputValue.startsWith("76")) {
    setIsLoadingProduto(true);
    getInfoProduto(filial, inputValue);
    setInputValue("");
    inputRef.current.focus();
  }
  if (inputValue.length === 13) {
    setIsLoadingProduto(true);
    getInfoProduto(filial, inputValue);
    setInputValue("");
    inputRef.current.focus();
  }

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input container">
      <input
        ref={inputRef}
        type="number"
        placeholder="Insira o código de barras"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        onDoubleClick={handleDelete}
      ></input>
    </div>
  );
};

export default Input;
