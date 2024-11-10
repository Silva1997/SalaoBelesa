import  { useState } from 'react';
import { Drawer } from 'antd';
const Gaveta = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="primary"  className="b_butao"    id="butao1"  onClick={showDrawer}>
      Agendamento
      </button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
     <input type='date'/>
      </Drawer>
    </>
  );
};
export default Gaveta;