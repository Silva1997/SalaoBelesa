import React from "react";
import { Carousel, Card } from "antd";
import Imagem1 from "../assets/Na.jpg";
import '../Css/estilo.css'

const Rolagem = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <h6 id="texto1">Nossos Trabalhos</h6>
      <Carousel
        afterChange={onChange}
        arrows
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems:'center',
          height: "450px",
          padding:'2rem',
          
        }}
      >
        <Card >
        {/* <img src={Imagem1} alt="imagem" className="img1" style={{height:'40vh'}}/> */}
        </Card>

       <div className="test1">
        <img src={Imagem1} alt="imagem" className="img1" style={{height:'40vh'}}/>
        </div>
      </Carousel>
    </>
  );
};
export default Rolagem;

const App = () => (
  <Card
    // bordered={false}
    hoverable
    style={{
      width: "200px",
      height: "12px",
      borderRadius: "12px 12px",
      // margin:"1rem"
    }}
    cover={<img alt="example" src={""} />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
  </Card>
);
