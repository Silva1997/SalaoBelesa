import * as React from "react";
import { motion } from "framer-motion";
import { Menu } from "antd";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

 const MenuItem = ({ i }) => {
//   const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
    //   whileHover={{ scale: 1 }}
    //   whileTap={{ scale: 0.95 }}
    >
    <Menu style={{zIndex:'1000'}}  items={i} mode="vertical" defaultSelectedKeys={['1']}/>
      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
};

export default MenuItem