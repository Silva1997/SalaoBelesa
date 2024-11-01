import React from "react";
import "./Css/estilo.css";
import Card from "antd/es/card/Card";
import { MenuOutlined } from "@ant-design/icons";
import Rolagem from "./Carousel/Carosel";
import foto1 from "./assets/unha.png";

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
          <div className="tagCard-1">
            <p id="texto4"> Manicure</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
              2
            </Card>
            <p id="texto4"> Penicure</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
              2
            </Card>
            <p id="texto4"> Cabeleiro</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
              3
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
