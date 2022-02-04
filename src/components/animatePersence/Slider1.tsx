import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 225, 255), rgb(71, 0, 255));
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Text = styled.div`
  margin: 20px 0px;
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 2;
`;

const box = {
  entry: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    rotateX: 180,
    transition: {
      duration: 1,
    },
  },
};

function Slider1() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  // 이전 버튼은 잘 작동하지만 애니메이션이 반대가 되지 않고 여전히 next와 똑같이 우측에서 넘어온다
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box variants={box} initial="entry" animate="center" exit="exit" key={i}>
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
      <Text>
        이전 버튼은 잘 작동하지만
        <br />
        역방향이 아닌 next 애니메이션에 효과를 준 그대로
        <br />
        오른쪽에서 나타나서 왼쪽으로 사라진다.
      </Text>
    </Wrapper>
  );
}

export default Slider1;
