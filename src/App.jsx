import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./Css/estilo.css";
import { MenuOutlined } from "@ant-design/icons";
import Rolagem from "./Carousel/Carosel";
function App() {
  return (
    <>
      <div className="Menu1">
      <h6 id="texto3">Espelho.Meu</h6>
        <button id="subMenu">
          <MenuOutlined size={20} className="icon" />
        </button>
      </div>

      <div className="Janela1">
        <div className="posicao1">
        <div className="centralizarbutao">
        <button id="butao1">Agendamento</button>
        </div>
          <h5 id="texto2">
            Por detrás de <br />
            cada cliente
          </h5>
        </div>
      </div>
      {/* <div>
<Rolagem/>
      </div> */}
    </>
  );
}

export default App;
