import "./Css/estilo.css";
import React from "react";
import Rotas from "./Rotas/Rotas";
import Rolagem from "./Carousel/Carosel";
import foto1 from "./assets/manicure.jpg";
import foto2 from "./assets/penicure.jpg";
import foto3 from "./assets/cabelo.jpg";
import foto4 from "./assets/logo.png";
import foto5 from "./assets/fundo7.png";
import Pessoa from "./assets/pessoa.png";
import Gaveta from "./compont/Gaveta";
import { PhoneOutlined, HeatMapOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function App() {
  const [activar, setActivar] = React.useState(false);
  const [activar1, setActivar1] = React.useState(false);
  const [activar2, setActivar2] = React.useState(false);

  function handleActivar() {
    setActivar(!activar);
  }
  function handleActivar1() {
    setActivar1(!activar1);
  }
  function handleActivar2() {
    setActivar2(!activar2);
  }
  return (
    <>
      <nav className="Barra-de-menu">
        <div>
          <img id="img-menu-icon" src={foto4} alt="p" />
        </div>
        <Rotas />
      </nav>

      <div className="Janela1" id="Janela1">
        <picture 
         className="fundo-imagem" 
        id="fundo-janela1">
          <div className="fundo-texto-imagem">
            <div className="centralizarbutao" id="centralizarbutao">
              <Gaveta />

              {/* <button
              className="fundo-imagem"
                  className="b_butao"
                  id="butao1"
                  onClick={() => {
                    Abrir();
                  }}
                >
                  Agendamento
                </button> */}
            </div>
            <h5 id="texto2" className="texto2">
              Por detrás de <br />
              cada cliente
            </h5>
          </div>
        </picture>

        <div className="div-fundo-imagem">
        <div  id="fundo-janela">

          </div>
          <div className="div-fundo-coluna">
          
            <h5 id="div-texto">
              Por detrás de cada cliente,
              <br /> a excelência no serviço
            </h5>
            <div  id="centralizarbutao">
              <button className="b_butao" id="butao1">
                Agendamento!
              </button>
            </div>
            {/*  */}
            <div>
              <img id="imagem-icon" src={foto5} alt="Ap" />
            </div>
          </div>
          {/* </div>
</section> */}
        </div>
      </div>

      <div className="Janela2">
        <div>
        {/* <Cardhorizonatl/> */}
          <Rolagem />
        </div>
      </div>

      <div className="Janela2 ">
        <h6 id="texto1">
          <span id="text-1">02.</span>Sobre Nós{" "}
        </h6>{" "}
        <hr id="text-1_1"></hr>
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
        <h6 id="texto0">
          <span id="text-1">03.</span>Serviços
        </h6>{" "}
        <hr id="text-1_2"></hr>
        <div className="tagCard">
          <div className="tagCard-1">
            <div className="card-container">
              <div className="card">
                <img
                  alt="example"
                  src={foto1}
                  className={`img-card ${activar ? "img-card-activa" : ""}`}
                  onClick={handleActivar}
                />
                <div className="texto-card-div">
                  <h3 className="texto-card">Manicure</h3>
                  <p className="texto-card1">
                    {" "}
                    Unhas impecáveis, confiança inabalável.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <img
                  alt="example"
                  src={foto2}
                  className={`img-card ${activar1 ? "img-card-activa1" : ""}`}
                  onClick={handleActivar1}
                />
                <div className="texto-card-div">
                  <h3 className="texto-card">Penicure</h3>
                  <p className="texto-card1">
                    {" "}
                    Pés bem cuidados, passos mais leves.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card-fundo"></div>
              <div className="card">
                <img
                  alt="example"
                  src={foto3}
                  className={`img-card ${activar2 ? "img-card-activa2" : ""}`}
                  onClick={handleActivar2}
                />
                <div className="texto-card-div">
                  <h3 className="texto-card">Cabeleiro</h3>
                  <p className="texto-card1">
                    {" "}
                    Transforme seu visual, realce sua beleza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Janela2">
        <h6 id="texto1">
          <span id="text-1">04.</span>Equipe{" "}
        </h6>{" "}
        <hr id="text-1_1"></hr>
        <div className="div-equipa">
          {/* Cartao1 */}

          <div className="Card-equipa">
            <h6 id="texto1-p"> Ana Margarida</h6>
            <img className="Card-img-equipa" src={Pessoa} alt="A1" />
            <p className="div-texto-equipa">
              {" "}
              Maquiadora e Designer de Sobrancelhas
            </p>

            <hr id="linha-card-equipa" />
          </div>
          {/* Cartao2 */}

          <div className="Card-equipa">
            <h6 id="texto1-p"> Roberta Lopes</h6>
            <img className="Card-img-equipa" src={Pessoa} alt="A1" />
            <p className="div-texto-equipa">
              {" "}
              Maquiadora e Designer de Sobrancelhas
            </p>

            <hr id="linha-card-equipa" />
          </div>
          {/*Cartao3  */}

          <div className="Card-equipa">
            <h6 id="texto1-p"> Rosa verde</h6>
            <img className="Card-img-equipa" src={Pessoa} alt="A1" />
            <p className="div-texto-equipa">
              {" "}
              Maquiadora e Designer de Sobrancelhas
            </p>

            <hr id="linha-card-equipa" />
          </div>
        </div>
      </div>

      <div className="Janela2">
        {/* <h6 id="texto1-footer" style={{ margin: "0" }}>
          Preencha o formulário para enviar sugestões, elogios ou solicitar
          orçamento
        </h6>

        <p id="texto2-footer">De Segunda Feira à Sábado 09:00 às 20:00</p> */}
        <div className="div-formulario-solitacao">
        <div>
        <h6 id="texto1-footer" style={{ margin: "0" }}>
          Preencha o formulário para enviar sugestões, elogios ou solicitar
          orçamento
        </h6>

        <p  className="texto-formulario-s">De Segunda Feira à<br/> Sábado 09:00 às 20:00</p>
        </div>
          <div className="formulario-input">

          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="text" placeholder="Assunto" />
          <TextArea
            cols={40}
            rows={7}
            maxLength={2000}
            placeholder="Messagem"
          ></TextArea>

          <Button type="primary">Enviar Mensagem</Button>
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
            <span id="texto2-footer">
              {" "}
              <HeatMapOutlined className="icon1" /> R. da Maxinde iepa
            </span>
          </div>
          {/* <div>
          <button id="butao2">
              <WhatsAppOutlined /> Entrar em conctato
            </button>
          </div> */}
        </div>
        <div className="copia-escrita">
          <p>© 2024 Eng. Silva - Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default App;



function Cardhorizonatl(){

return(<section>

  <div className="cards-wrapper">
    <div className="card-card">card-card 1</div>
    <div className="card-card">card-card 2</div>
    <div className="card-card">card-card 3</div>
    <div className="card-card">card-card 4</div>
    <div className="card-card">card-card 5</div>
    <div className="card-card">card-card 6</div>
    <div className="card-card">card-card 7</div>
    <div className="card-card">card-card 9</div>
    <div className="card-card">card-card 9</div>
    <div className="card-card">card-card 10</div>
  </div>
</section>)


}