import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import {
  Calendar,
  Col,
  Radio,
  Row,
  Select,
  theme,
  Typography,
  Card,ConfigProvider
  Carousel,
} from "antd";
import dayLocaleData from "dayjs/plugin/localeData";
import { ToastContainer, toast } from "react-toastify"; // Importando o react-toastify
import "react-toastify/dist/ReactToastify.css"; // Importando o CSS do react-toastify

dayjs.extend(dayLocaleData);

const App = () => {
  const { token } = theme.useToken();
  const [pegar, setPegar] = React.useState(0);
  const [horaSelecionada, setHoraSelecionada] = React.useState(""); // Estado para armazenar a hora selecionada
  const horas = [
    { hora: "09:00" },
    { hora: "12:00" },
    { hora: "14:00" },
    { hora: "16:00" },
  ];

  React.useEffect(() => {
    console.log("Dia selecionado:", pegar);
  }, [pegar]);

  const onDateSelect = (value) => {
    // Formata a data no formato desejado
    const formattedDate = value.format("DD-MM-YYYY");
    const dia = value.format("DD");
    setPegar(dia);
    // Exibe uma notificação com a data formatada
  
    console.log(formattedDate, "Dia", pegar); // Exibe a data no console para debug
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle1 = {
    width: 250,
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
  };

  const wrapperStyle = {
    width: 250,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginBottom: "1rem", // Corrigido erro de digitação aqui (mariginBottom -> marginBottom)
    backgroundColor: "#495057",
    color: "#fff",
  };

  const Pegar = (hora) => {
    setHoraSelecionada(hora); // Atualiza o estado com a hora selecionada
    console.log("Hora selecionada:", hora);
  };

  return (
    <div style={wrapperStyle1}>
      <div style={wrapperStyle}>

      <ConfigProvider
  theme={{
    components: {
      Calendar: {
     fullBg:'#000'
      },
    },
  }}
>
  ...

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
              <div style={{ padding: 6 }}>
                <Typography.Title level={4}>Calendário</Typography.Title>
                <Row gutter={8}>
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
          onSelect={onDateSelect}
        />
        </ConfigProvider>
      </div>

      <div>
        {pegar !== 0 ? (
          <>
            <div
              style={{
                backgroundColor: "#1c1b1b",
                marginTop: "1rem",
                border: "2px solid #495057",
              }}
            >
              <div>
                <Rolagem horas={horas} Pegar={Pegar} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    margin: "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflow: "hidden",
                      margin: "0",
                      paddingRight: "0.8rem",
                      paddingLeft: "0.8rem",
                      lineHeight: "0px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="card-container-reserva">
                      <h6 id="texto-card-reserva">Manicure</h6>
                      <h6 id="texto-card-reserva">Dia </h6>
                      <h6 id="texto-card-reserva">Horário </h6>
                      {/* <h6 id="texto-card-reserva">Salao {"Espelho"}</h6> */}
                    </div>
                    <div className="card-container-reserva">
                      <h6 id="texto-card-reserva1"> Kz 2000,00 </h6>
                      <h6 id="texto-card-reserva1">{pegar} </h6>
                      <h6 id="texto-card-reserva1"> {horaSelecionada} </h6>{" "}
                      {/* Mostra a hora selecionada */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer/>
            <button style={{height:'50px'}} className="div-card-agenda-butao" onClick={()=>{  toast.info(`Data selecionada: ${pegar}, ${horaSelecionada}`);}}>Reservar</button>
          </>
        ) : (
          <h6 style={{ textAlign: "center" }}>Sem Reservar</h6>
        )}
      </div>
    </div>
  );
};

const Rolagem = ({ horas, Pegar }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      className="Carousel-main"
      dots={false}
      afterChange={onChange}
      arrows
    >
      {horas.map((cont, index) => {
        return (
          <div key={index}>
            <h3
              className="texto-card-main"
              onClick={() => {
                Pegar(cont.hora); // Passa a hora para a função Pegar
                console.log("Hora selecionada:", cont.hora);
              }}
            >
              {cont.hora}
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
};

export default App;
