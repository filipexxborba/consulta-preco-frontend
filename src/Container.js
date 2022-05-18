import React from "react";
import ConfirmFilialPopup from "./components/ConfirmFilialPopup/ConfirmFilialPopup";
import Enviopopup from "./components/EnvioPopup/Enviopopup";
import ExcluirPopup from "./components/ExcluirPopup/ExcluirPopup";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Lista from "./components/Lista/Lista";
import Loading from "./components/Loading/Loading";
import NaoEncontrado from "./components/NaoEncontrado/NaoEncontrado";
import Produto from "./components/Produto/Produto";
import { GlobalContext } from "./Context/GlobalContext";

const Container = () => {
  const {
    isChange,
    isLoadingProduto,
    currentProduto,
    listaProdutos,
    isDeleting,
    isSending,
    naoEncontrado,
    isDebugging,
    debuggingCod,
  } = React.useContext(GlobalContext);
  return (
    <>
      <Header />
      {isChange ? <ConfirmFilialPopup /> : null}
      {isDeleting ? <ExcluirPopup /> : null}
      {isSending ? <Enviopopup /> : null}

      {!isChange && !isDeleting && !isSending ? (
        <>
          <Input />
          {isLoadingProduto ? <Loading /> : null}
          {!isLoadingProduto && currentProduto && !naoEncontrado ? (
            <Produto
              nome={currentProduto.nome}
              marca={currentProduto.marca}
              valor={currentProduto.valor}
              codigo={currentProduto.codigo}
              data={currentProduto.data}
            />
          ) : null}
          {naoEncontrado ? <NaoEncontrado /> : null}
          {listaProdutos && listaProdutos.length > 0 ? <Lista /> : null}
          {isDebugging ? <p>{debuggingCod}</p> : null}
        </>
      ) : null}
    </>
  );
};

export default Container;
