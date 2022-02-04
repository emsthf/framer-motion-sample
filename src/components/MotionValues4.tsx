import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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

function MotionValues4() {
  // x축 리스닝
  const x = useMotionValue(0);
  // 읽은 x 축을 맵핑
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 247, 255), rgb(38, 0, 255)",
      "linear-gradient(135deg, rgb(255, 240, 102), rgb(255, 81, 0)",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
  }, [scrollYProgress]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues4;
