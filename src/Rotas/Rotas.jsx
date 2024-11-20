import React from 'react';
import { Drawer, Menu } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import '../Css/estilo.css'
import { Link,BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'; // Importando o Link do React Router para navegação

export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={""} /> {/* Página inicial */}
            <Route path="sobre" element={""} /> {/* Página Sobre */}
            <Route path="contato" element={""} /> {/* Página Contato */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
const App = () => {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Botão que abre o Drawer */}

      <button id="subMenu" type="primary" onClick={showDrawer}>
           <MenuOutlined size={20} className="icon" />
      </button>

      {/* Drawer que contém o Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        id='Menu-drawer'
        width={360} // Largura do Drawer
      >
        {/* Menu com Links para navegação */}
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
      
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link> {/* Link para a página inicial */}
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/sobre">Sobre</Link> {/* Link para a página Sobre */}
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contato">Contato</Link> {/* Link para a página Contato */}
          </Menu.Item>
        </Menu>
        <Outlet/>
      </Drawer>
    </>
  );
};

