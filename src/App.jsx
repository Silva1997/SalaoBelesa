import React from "react";
import "./Css/estilo.css";
import { MenuOutlined } from "@ant-design/icons";
import Rolagem from "./Carousel/Carosel";
import foto1 from "./assets/manicure.jpg";
import foto2 from "./assets/penicure.jpg";
import foto3 from "./assets/cabelo.jpg";
import foto4 from "./assets/logo.png";
import { WhatsAppOutlined, PhoneOutlined,HeatMapOutlined } from "@ant-design/icons";

function App() {
 
  return (
    <>
      <div className="Barra-de-menu">
       <div ><img id="img-menu-icon" src={foto4} alt="p"/></div>
        <button id="subMenu">
          <MenuOutlined size={20} className="icon" />
        </button>
      </div>

      <div className="Janela1" id="Janela1">
        <picture className="fundo-imagem" id="fundo-janela1">
       <div  className="fundo-texto-imagem">
       <div className="centralizarbutao" id="centralizarbutao">
            <button className="b_butao" id="butao1">
              Agendamento
            </button>
          </div>
          <h5 id="texto2" className="texto2">
            Por detrás de <br />
            cada cliente
          </h5>
       </div>
        </picture>
{/* display nenhum */}
        <div className="div-fundo-imagem">

<div className="centralizarbutao" id="centralizarbutao">
    <button className="b_butao" id="butao1">
      Agendamento
    </button>
  </div>
  <h5 id="texto2" className="texto2">
    Por detrás de <br />
    cada cliente
  </h5>
</div>
      </div>

      <div className="Janela2">
        <div>
          <Rolagem />
        </div>
      </div>

      <div className="Janela2 ">
        <h6 id="texto1"><span id="text-1">02.</span>Sobre Nós </h6>  <hr id="text-1_1"></hr>

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
        <h6 id="texto0"><span id="text-1">03.</span>Serviços</h6> <hr id="text-1_2"></hr>
        <div className="tagCard">

          <div className="tagCard-1">

            <div className="card-container">
              <div className="card">
                <img alt="example" src={foto1} className="img-card " />
                <div className="texto-card-div">
                  <h3 className="texto-card">Manicure</h3>
                  <p className="texto-card1">
                    {" "}
                    Pés bem cuidados, passos mais leves.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-container1">
              <div className="card">
                <img alt="example" src={foto2} className="img-card " />
                <div className="texto-card-div">
                  <h3 className="texto-card">Penicure</h3>
                  <p className="texto-card1">
                    {" "}
                    Pés bem cuidados, passos mais leves.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-container2" >
              <div className="card-fundo"></div>
              <div className="card">
                <img alt="example" src={foto3} className="img-card " />
                <div className="texto-card-div">
                  <h3 className="texto-card">Cabeleiro</h3>
                  <p className="texto-card1">
                    {" "}
                    Pés bem cuidados, passos mais leves.
                  </p>
                </div>
              </div>
            </div>
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
            <span id="texto2-footer"> <HeatMapOutlined className="icon1" /> R. da Maxinde iepa</span>
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
