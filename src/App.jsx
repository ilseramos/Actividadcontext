import { useContext } from "react";
import "./App.css";
import Contador from "./Components/Contador/contador";
import InformacionComponent from "./Components/Informacion/informacionComponent";
import { GlobalContext } from "./Context/Global/global.context";

function App() {
  const { handleCount } = useContext(GlobalContext);
  
  return (
    <div className="App">
      <InformacionComponent/>
    </div>
  );
}

export default App;
