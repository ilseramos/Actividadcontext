import React, { useContext } from "react";

import { GlobalContext } from "./Context/Global/global.context";

export default function ComponenteSinContext() {
  const { handleCount } = useContext(GlobalContext);
  return (
    <div>
      <h3>Componente sin Context</h3>
      <button onClick={() => handleCount("increment")}>Contar</button>
      <button onClick={() => handleCount("decrement")}>-</button>
    </div>
  );
}