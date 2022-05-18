import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [filial, setFilial] = React.useState(null);
  const [isChange, setIsChange] = React.useState(false);
  const [currentProduto, setCurrentProduto] = React.useState(null);
  const [isLoadingProduto, setIsLoadingProduto] = React.useState(false);
  const [pularVer, setPularVer] = React.useState(false);
  const [listaProdutos, setListaProdutos] = React.useState(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [tempListaProdutos, setTempListaProdutos] = React.useState(null);
  const [naoEncontrado, setNaoEncontrado] = React.useState(false);
  const [isDebugging, setIsDebugging] = React.useState(false);
  const [debuggingCod, setDebuggingCod] = React.useState(null);
  const filiaisArray = [
    "Nenhuma filial selecionada",
    "P01 - República",
    "P02 - JK",
    "P03 - Cataratas",
    "P04 - Morumbi",
    "P05 - Vila A",
    "P06 - CD",
    "P07 - STI",
    "P08 - Porto Meira",
    "P09 - Medianeira",
    "P10 - Toledo",
    "P11 - SoHo AD",
  ];
  const emailsArray = [
    "Nenhuma filial selecionada",
    "pdv.republica@panoramahomecenter.com.br",
    "pdv.jk@panoramahomecenter.com.br",
    "pdv.cataratas@panoramahomecenter.com.br",
    "pdv.morumbi@panoramahomecenter.com.br",
    "pdv.vilaa@panoramahomecenter.com.br",
    "pdv.cap@panoramahomecenter.com.br",
    "pdv.sti@panoramahomecenter.com.br",
    "pdv.portomeira@panoramahomecenter.com.br",
    "pdv.medianeira@panoramahomecenter.com.br",
    "pdv.toledo@panoramahomecenter.com.br",
    "adm@sohoad.com.br",
  ];
  const apiUrl = "http://panoramavm.no-ip.info:9999/";

  React.useEffect(() => {
    if (localStorage.getItem("filial")) {
      setFilial(localStorage.getItem("filial"));
    } else {
      localStorage.setItem("filial", 0);
      setIsChange(true);
      setPularVer(true);
    }
    if (localStorage.getItem("listaDeProdutos")) {
      let temp = JSON.parse(localStorage.getItem("listaDeProdutos"));
      setListaProdutos(temp);
    } else {
      let temp = [];
      localStorage.setItem("listaDeProdutos", JSON.stringify(temp));
      setListaProdutos(temp);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        filial,
        filiaisArray,
        emailsArray,
        isChange,
        setIsChange,
        setFilial,
        apiUrl,
        currentProduto,
        setCurrentProduto,
        isLoadingProduto,
        setIsLoadingProduto,
        setPularVer,
        pularVer,
        listaProdutos,
        setListaProdutos,
        isDeleting,
        setIsDeleting,
        tempListaProdutos,
        setTempListaProdutos,
        isSending,
        setIsSending,
        naoEncontrado,
        setNaoEncontrado,
        debuggingCod,
        setDebuggingCod,
        isDebugging,
        setIsDebugging,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
