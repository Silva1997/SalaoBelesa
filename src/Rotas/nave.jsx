import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import '../Css/estilo.css'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {/* {items.map(i => ( */}
    <MenuItem i={items}   />
    {/* ))} */}
  </motion.ul>
);

const items = [
  { label: <Link to="/">Home</Link>, key: "1" },
  { label: <Link to="/sobre">Sobre</Link>, key: "2" },
  { label: <Link to="/contato">Contato</Link>, key: "3" },
];
