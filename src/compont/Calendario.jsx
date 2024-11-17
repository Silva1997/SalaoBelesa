import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Calendar, Col, Radio, Row, Select, theme, Typography,Card,Carousel } from 'antd';
import dayLocaleData from 'dayjs/plugin/localeData';
import { ToastContainer, toast } from 'react-toastify'; // Importando o react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS do react-toastify

dayjs.extend(dayLocaleData);

const App = () => {
  const { token } = theme.useToken();
const [pegar,setPegar] = React.useState(0); 

React.useEffect(()=>{console.log('actualizar os dados--dia',pegar) },[pegar])
// pegar o valor do dia

  // Função chamada quando um dia for selecionado
  const onDateSelect = (value) => {
    // Formata a data no formato desejado
    const formattedDate = value.format('DD-MM-YYYY');
    const dia =value.format('DD')
    setPegar(dia);
    // Exibe uma notificação com a data formatada
    toast.info(`Data selecionada: ${formattedDate}`);
    console.log(formattedDate,pegar); // Exibe a data no console para debug
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const wrapperStyle1 = {
    width: 250,
    display:'flex',
    gap:'1rem',
    flexDirection:'column'
   
  };

  const wrapperStyle = {
    width: 250,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    mariginBottom:'1rem'
  };

  return (
    <div style={wrapperStyle1}>


    <div style={wrapperStyle}>
  
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            );
          }
          return (
            <div
              style={{
                padding: 6,
       
              }}
            >
              <Typography.Title level={4}>Calendário</Typography.Title>
              <Row
            
               gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Mês</Radio.Button>
                    <Radio.Button value="year">Ano</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    popupMatchSelectWidth={false}
                    className="my-year-select"
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    popupMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
        onSelect={onDateSelect} // Usando o onSelect para capturar a data
      />

      {/* O ToastContainer precisa estar no seu componente para exibir as notificações */}

    </div>

    <div>

    {
  pegar !=0 ? 
  <div style={{backgroundColor: "#000",borderRadius:'0.5rem',mariginTop:'1rem'}}>

<div>
<Rolagem/>
<div style={{display:'flex',flexDirection:'column',overflow:'hidden',margin:'0'}}>
<div  style={{display:'flex',flexDirection:'row',overflow:'hidden',margin:'0',paddingRight:'0.3rem',paddingLeft:'0.3rem',lineHeight:'0px',justifyContent:'space-between'}}>
<div  className='card-container-reserva'>
<h6>Manicure</h6> 
   <h6>Dia {pegar}</h6> 
   <h6>Horário {pegar}</h6>
   <h6>Salao {"Espelho"}</h6>  
   </div>

   <div className='card-container-reserva'>
   <h6>--Akz </h6> 
   <h6> -- </h6> 
   <h6>--- </h6>
   <h6>-- </h6>  
   </div>
</div>
  </div>
</div>

</div>
 
:' Sem Reservar'
}
    </div>

    </div>
  );
};

export default App;

const Rolagem = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel className='Carousel-main'  dots={false} afterChange={onChange} arrows>
      <div  >
       <h3  className='texto-card-main'>09:00</h3>
      </div>
      <div >
        <h3  className='texto-card-main'>11:00</h3>
      </div>
      <div>
        <h3 className='texto-card-main' >13:00</h3>
      </div>
      <div>
        <h3 className='texto-card-main' >19:00</h3>
      </div>
    </Carousel>
  );
};
