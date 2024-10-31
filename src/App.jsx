import React from "react";
import "./Css/estilo.css";
import Card from "antd/es/card/Card";
import { MenuOutlined } from "@ant-design/icons";
import Rolagem from "./Carousel/Carosel";
import foto1 from './assets/image.png'

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
        <picture className="posicao1">
          <div className="centralizarbutao">
            <button id="butao1">Agendamento</button>
          </div>
          <h5 id="texto2">
            Por detrás de <br />
            cada cliente
          </h5>
        </picture>
      </div>

      <div className="Janela2">
        <div>
          <Rolagem />
        </div>
      </div>

      <div className="Janela3">
        <h6 id="texto1">Nossos Serviços</h6>
        <div className="tagCard">
         
          <Card 
          className="card">
          <img src={foto1} className="img" alt="imagem1"/>
          
          </Card>
          <Card className="card">2</Card>
          <Card className="card">3</Card>
        </div>
      </div>
    </>
  );
}

export default App;
