import React from "react";
import { Carousel, Card } from "antd";
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
  ];
  console.log(JSON.stringify(dados));

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <h6 id="texto1">Nossos Trabalhos</h6>
      <Carousel
        afterChange={onChange}
        arrows
        className="Rodalgem"
      >
        {dados.map((dado, index) => (
          <div className="test1" key={index}>
            <img
              src={dado.url}
              alt="imagem"
              className="img1"
              style={{ height: "40vh" }}
            />

            <h6 className="promocao">{dado.nome}</h6>
          </div>
        ))}
      </Carousel>
    </>
  );
};
export default Rolagem;


