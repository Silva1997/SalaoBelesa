import "./Css/estilo.css";
import Card from "antd/es/card/Card";
import { MenuOutlined } from "@ant-design/icons";
import Rolagem from "./Carousel/Carosel";
import foto1 from "./assets/unha.png";
import { WhatsAppOutlined, PhoneOutlined } from "@ant-design/icons";

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

      <div className="Janela2 ">
        <h6 id="texto1">Sobre Nos</h6>

        <p id="texto-paragrafo">
          No coração de Malanje, Espelho Meu é um salão que brilha não só pelo
          luxo, mas pelo talento incrível da nossa equipa. Oferecemos serviços
          que vão desde cortes clássicos até penteados ousados, sempre com o
          toque personalizado que só o Espelho Meu pode oferecer. Venha conhecer
          o lugar onde cada cliente é tratado como uma obra de arte, refletindo
          a verdadeira essência da beleza. Afinal, quem é a mais bela do reino?
        </p>
      </div>
      {/* Servicos */}
      <div className="Janela3">
        <h6 id="texto1">Nossos Serviços</h6>
        <div className="tagCard">
          <div className="tagCard-1">
            <p id="texto4"> Manicure</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
         <p> Pés bem cuidados, passos mais leves.</p>
            </Card>
            <p id="texto4"> Penicure</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
          <p>Unhas impecáveis, confiança inabalável</p>
            </Card>
            <p id="texto4"> Cabeleiro</p>
            <Card
              className="card"
              cover={<img alt="example" src={foto1} className="img" />}
            >
              Transforme seu visual, realce sua beleza.
            </Card>
          </div>
        </div>
      </div>

      {/* Rodape */}
      <footer className="Janela-footer">
        <div className="linha">
          <div>
            <h3 id="texto1-footer">Entre em contacto com a gente!</h3>
            <p id="texto2-footer">
              Entre em contacto com o Espelho Meu,
              <br /> queremos tirar as duvidas, ouvir suas criticas e sugestoes
            </p>

            <span id="texto2-footer">
              {" "}
              <PhoneOutlined className="icon1" /> (+244) 000-000-000
            </span>
            <br />
            <span id="texto2-footer"> R. da Maxinde iepa</span>
          </div>
          <div>
            <button id="butao2">
              <WhatsAppOutlined /> Entrar em conctato
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
