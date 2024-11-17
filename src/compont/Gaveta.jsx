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
          avatar={<Avatar size={45} src={foto} />}
          description={
            <div  className='wrap-card-div'>

             <div>
             <h6 id='div-texto-card-agenda'>Manicure</h6>
             <p id='div-texto-card-agenda-1'>2000 akz</p>
             </div>

             <div>
             <button onClick={showChildrenDrawer} className="div-card-agenda-butao" >Reservar</button>
             </div>

            </div>
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
  <div style={{display:'flex',justifyContent:'center'}}>
  <Calenadrio/>
  </div>
        </Drawer>
      </Drawer>
    </>
  );
};
export default Gaveta;