import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./dimensao";
import {MenuToggle} from "./Menu";
import {Navigation} from './nave'
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'; // Importando o Link do React Router para navegação
import '../Css/estilo.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};



export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Example />}>
            <Route index element={""} /> {/* Página inicial */}
            <Route path="sobre" element={''}  errorElement={console.log('Sem nada')}/> {/* Página Sobre */}
            <Route path="contato" element={""} /> {/* Página Contato */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }



const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
  <>
<motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()}  />

    </motion.nav>
    <Outlet/>
  </>
  );
};
// export default Example;