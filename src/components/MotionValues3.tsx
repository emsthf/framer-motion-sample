import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(135deg, rgb(113, 0, 255), rgb(71, 0, 255)); */
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

function MotionValues3() {
  // x축 리스닝
  const x = useMotionValue(0);
  // 읽은 x 축을 맵핑
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 247, 255), rgb(162, 0, 211)",
      "linear-gradient(135deg, rgb(255, 240, 102), rgb(196, 19, 6)",
    ]
  );

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    rotateZ.onChange(() => console.log(rotateZ.get()));
  }, [x]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues3;
