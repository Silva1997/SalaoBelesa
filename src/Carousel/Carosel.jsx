import React from 'react';
import { Carousel,Card ,Image} from 'antd';
import Cards from '../Cartao/Cards'
import Imagem1 from '../assets/Na.jpg'
const { Meta } = Card;
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Rolagem = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
   <>

   <h5 id='texto1'>Nossos serviços</h5>
 <Carousel afterChange={onChange} 
 arrows
//  autoplay
 style={{
  height:'60vh',
  // backgroundColor:'#364d79'
 }}>
 
      <div className='Card' >
    <App/>
    
      </div>
      <div className='Card' >
    <App/>
    
      </div>
      {/* <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>

<div>
    {/* <Cards/> */}
</div>
   </>
  );
};
export default Rolagem;







const App = () => (
  <Card
    hoverable
    style={{
      width: 185,
      margin:"1rem"
    }}
    cover={<img alt="example" src={Imagem1} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
