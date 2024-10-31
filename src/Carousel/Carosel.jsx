import React from "react";
import { Carousel, Card, Image } from "antd";
import Cards from "../Cartao/Cards";
import Imagem1 from "../assets/Na.jpg";
const { Meta } = Card;
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
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
        //  autoplay
        style={{
          height:"300px"
        }}
      >
        <div className="Card">
          <App />
        </div>
        <div className="Card">
          <App />
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
    width:"200px",
    height:"12px",
    borderRadius:'12px 12px'
      // margin:"1rem"
    }}
    cover={<img alt="example" src={Imagem1} />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
  </Card>
);
