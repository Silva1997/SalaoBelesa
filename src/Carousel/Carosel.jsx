import React from "react";
import { Carousel, Card} from "antd";
import Imagem1 from "../assets/Na.jpg";

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
          display:'flex',
       flexWrap:'wrap',
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
