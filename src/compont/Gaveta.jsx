import React, { useEffect, useState } from "react";
import { Drawer, Card, Avatar } from "antd";
import foto from "../assets/reserva.png";
import "../Css/estilo.css";
import Calenadrio from "./Calendario";

const Gaveta = () => {
  const [open, setOpen] = React.useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [adicionar, setAdd] = useState("");
  const [prece, setPreco] = useState("");

  function handleBuscar(value, preco) {
    //Puscar os valor selecionado do card dos servicos
    setAdd(value);
    setPreco(preco);
    // setAdd((push)=>[...push,value]);
    console.log("O valor selecionado foi", adicionar, "And", prece);
  }
  useEffect(() => {
    console.log("Update", adicionar);
  }, [adicionar, prece]);

  const detalhes = [
    {
      id: 1,
      tipo: "Manicure",
      preco: "2.500,00",
    },
    {
      id: 2,
      tipo: "Pedicure",
      preco: "1.500,00",
    },
    {
      id: 3,
      tipo: "Cabelo",
      preco: "8.500,00",
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <button
        type="primary"
        className="b_butao"
        id="butao1"
        onClick={showDrawer}
      >
        Agendamento
      </button>
      <Drawer
        title="Agendamendo"
        width={"310px"}
        id="drawer-div"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          key={0}
        >
          {detalhes.map((add, index) => (
            <>
              <Card.Meta
                className="div-card-agenda-container"
                avatar={<Avatar size={45} src={foto} />}
                description={
                  <div className="wrap-card-div">
                  <span className="div-card-position" >
       
                <h6 id="div-texto-card-agenda">{add.tipo}</h6>
                <p id="div-texto-card-agenda-1">{add.preco}</p>
            
                  </span>
                    <button
                      onClick={() => {
                        showChildrenDrawer();
                        handleBuscar(add.tipo, add.preco);
                      }}
                      className="div-card-agenda-butao"
                    >
                      Reservar
                    </button>
                  </div>
                }
              />
            </>
          ))}

          {/* <Card.Meta
className='div-card-agenda-container'
          avatar={<Avatar size={45} src={foto} />}
          description={
            <div  className='wrap-card-div'>

             <div>
             <h6 id='div-texto-card-agenda'>Penicure</h6>
             <p id='div-texto-card-agenda-1'>4000 akz</p>
             </div>

             <div>
             <button onClick={showChildrenDrawer} className="div-card-agenda-butao" >Reservar</button>
             </div>

            </div>
            
          }
        />

<Card.Meta
className='div-card-agenda-container'
          avatar={<Avatar size={45} src={foto} />}
          description={
            <div  className='wrap-card-div'>

             <div>
             <h6 id='div-texto-card-agenda'>Cabeleiro</h6>
             <p id='div-texto-card-agenda-1'>6000 akz</p>
             </div>

             <div>
             <button onClick={showChildrenDrawer} className="div-card-agenda-butao" >Reservar</button>
             </div>

            </div>
            
          }
        /> */}
        </div>

        {/* Segundo */}
        <Drawer
          title="Agendar"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          id="drawer-div"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Calenadrio add={adicionar} prece={prece} />
          </div>
        </Drawer>
      </Drawer>
    </>
  );
};
export default Gaveta;
