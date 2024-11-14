import React, { useState } from 'react';
import { Drawer,Card,Avatar } from 'antd';
import foto from '../assets/reserva.png'
import '../Css/estilo.css'
import Calenadrio from './Calendario';

const Gaveta = () => {
  const [open, setOpen] = React.useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
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
      <Drawer title="Agendamendo"  width={'310px'} id='drawer-div' closable={false} onClose={onClose} open={open}>

<Card.Meta
className='div-card-agenda-container'
          avatar={<Avatar src={foto} />}
          description={
            <>
              <p id='div-texto-card-agenda'>Manicure</p>
              <p id='div-texto-card-agenda-1'>2000 akz</p>
              <button onClick={showChildrenDrawer} className="div-card-agenda-butao" >Reservar</button>
            </>
          }
        />

    
{/* Segundo */}
        <Drawer
          title="Agendar"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
   <Calenadrio/>
        </Drawer>
      </Drawer>
    </>
  );
};
export default Gaveta;