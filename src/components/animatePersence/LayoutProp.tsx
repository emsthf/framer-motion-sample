import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 225, 255), rgb(71, 0, 255));
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: rgba(9, 132, 227, 1);
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Text = styled.div`
  color: white;
  font-size: 35px;
  text-align: center;
  line-height: 2;
`;

function LayoutProp() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        {/* Framer Motion의 layout prop은 외부에 의해서 CSS가 바뀐 것을 감지해서 자동으로 애니메이션을 만들어 준다 */}
        <Circle layout />
      </Box>
      <Text>
        Click Anywhere
        <br />
        Framer Motion의 layout prop은 외부에 의해서 CSS가 바뀐 것을 감지해서 자동으로
        애니메이션을 만들어 준다.
      </Text>
    </Wrapper>
  );
}

export default LayoutProp;
