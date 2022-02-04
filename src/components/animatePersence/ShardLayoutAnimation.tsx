import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 255, 213), rgb(255, 166, 0));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: rgba(9, 132, 227, 1);
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Text = styled.div`
  color: white;
  font-size: 35px;
  text-align: center;
  line-height: 1.2;
  position: absolute;
  top: 80px;
`;

function ShardLayoutAnimation() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      {/* 서로 다른 Circle 컴포넌트지만 같은 layoutId를 줘서 Framer가 같은 컴포넌트로 인식하게 함 */}
      <Box>
        {!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
      <Text>
        각 Box 안에 있는 Circle은 서로 다른 컴포넌트지만
        <br />
        prop으로 같은 layoutId를 줘서 Framer가 하나의 컴포넌트로 인식하게 해서
        <br />그 변화를 애니메이션으로 만듦
        <br />
        Click Anywhere
      </Text>
    </Wrapper>
  );
}

export default ShardLayoutAnimation;
