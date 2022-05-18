import React from "react";
import Container from "./Container";
import { GlobalStorage } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <Container />
    </GlobalStorage>
  );
}

export default App;
