import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #7100ff, #00ffbf);
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

function MotionValues2() {
  // x축 리스닝
  const x = useMotionValue(0);
  // 읽은 x 축을 맵핑
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    scale.onChange(() => console.log(scale.get()));
  }, [x]);

  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues2;
