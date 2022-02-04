import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 225, 255), rgb(71, 0, 255));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
`;

const Text = styled.div`
  color: white;
  font-size: 35px;
  text-align: center;
  line-height: 1.2;
  position: absolute;
  bottom: 120px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function AnimatePresenceSample() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
            Hello!🤪
          </Box>
        ) : null}
      </AnimatePresence>
      <Text>
        AnimatePresence를 쓰면 3가지 state를 준다.
        <br />
        initial, animate, exit
        <br />
        각각 시작 애니메이션, 중간 상태, 사라질 때 애니메이션
      </Text>
    </Wrapper>
  );
}

export default AnimatePresenceSample;
