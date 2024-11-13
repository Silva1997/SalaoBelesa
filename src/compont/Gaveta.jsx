import React, { useState } from 'react';
import { Drawer,Card } from 'antd';
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
      <Drawer title="Agendamendo" width={360} closable={false} onClose={onClose} open={open}>

      <Card className="div-card-agenda">
         <div  className="div-card-agenda-container">

      <div>
  
      <img  src={foto} alt="icon-agenda" className="div-card-agenda-img" width={12}  />
      </div>

          <div className="div-card-agenda-frame">
            <div >
              <p className="div-card-agenda-texto-1">Manicure</p>
            
            </div>
          <div className="div-card-agenda-frame-1">  
          <h6 className="div-card-agenda-texto-2">2000 Akz</h6>
           <div>     <button onClick={showChildrenDrawer} className="div-card-agenda-butao" >Reservar</button></div>
           </div>
          </div>

         </div>
        </Card>
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