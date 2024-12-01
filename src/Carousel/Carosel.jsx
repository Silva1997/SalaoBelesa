import React from "react";
// import { Carousel } from "antd";
import Imagem1 from "../assets/Tranca1.png";
import Imagem2 from "../assets/Tranca2.png";
import Imagem3 from "../assets/Tranca3.png";

import "../Css/estilo.css";

const Rolagem = () => {
  let dados = [
    {
      url: Imagem1,
      nome: "12.000,00 Akz",
    },
    {
      url: Imagem2,
      nome: "10.000,00 Akz",
    },
    {
      url: Imagem3,
      nome: "15.000,00 Akz",
    },
    {
      url: Imagem3,
      nome: "15.000,00 Akz",
    },
  ];
  // console.log(JSON.stringify(dados));

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  const cardsWrapperRef = React.useRef(null);

  // Função para rolar para a esquerda
  const scrollLeft = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: -200, // Quantidade de pixels para rolar
        behavior: 'smooth', // Rolagem suave
      });
    }
  };

  // Função para rolar para a direita
  const scrollRight = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: 200, // Quantidade de pixels para rolar
        behavior: 'smooth', // Rolagem suave
      }); }
  }
  return (
    <>
      <h6 id="texto1"><span id="text-1">01.</span>Trabalhos</h6>  <hr id="text-1_1"></hr>
      {/* <Carousel
        afterChange={onChange}
        arrows
        className="Rodalgem"
      >
        {dados.map((dado, index) => (
          <div className="img-conteiner" key={index}>
            <img
              src={dado.url}
              alt="imagem"
              className="img1"
              id="img-rolagem"
       
            />

          </div>
        ))}
      </Carousel> */}


      <div className="cards-wrapper" ref={cardsWrapperRef}>
      {dados.map((dado, index) => (
          <div className="card-card" key={index}>
        
            <img
              src={dado.url}
              alt="imagem"
              className="img1"
              id="img-rolagem"
       
            />
   
    
          </div>

       
      ))}
      </div>

      {/* Botões de rolagem */}
    <div className="scroll-button">
    <button className="scroll-button-left" onClick={scrollLeft}>
        ‹
      </button>
      <button className="scroll-button-right" onClick={scrollRight}>
        ›
      </button>
    </div>
    </>
  );
};
export default Rolagem;


