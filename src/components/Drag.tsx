import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #7100ff, #4700ff);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: "100px", scale: 0.9 },
  drag: { backgroundColor: "rgba(9, 132, 227,1.0)", transition: { duration: 3 } },
};

function Drag() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileDrag="drag"
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default Drag;
