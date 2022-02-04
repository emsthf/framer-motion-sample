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
  // custom으로부터 boolean을 받아서 isBack으로 사용
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.4 },
  }),
};

function Slider2() {
  const [visible, setVisible] = useState(1);
  // 이전으로 가는지 판단하는 변수
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  // 이전 버튼은 잘 작동하지만 애니메이션이 반대가 되지 않고 여전히 next와 똑같이 우측에서 넘어온다
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence
        // exit 애니메이션이 끝나고 다음 애니메이션이 작동하게 하는 prop
        // exitBeforeEnter
        custom={back}
      >
        {/* 리액트는 key 값이 바뀐 것만으로 element가 사라졌다고 생각한다.(리랜더 함) 그래서 굳이 배열을 쓰지 않아도 된다 */}
        <Box
          // custom이 boolean 값을 받아서 앞으로 가는건지 뒤로가는 건지 판단
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
      <Text>
        React는 key 값이 바뀐 것 만으로 element가 사라졌다고 판단해서 re-render 한다.
        <br />
        컴포넌트가 사라졌다고 판단하면 exit 애니메이션이 작동하게 되므로 이 경우, 굳이
        배열을 쓸 필요가 없음
        <br />
        단지 버튼으로 key 값과 number만 바꿔주면 된다
        <br />
        이전 버튼의 애니메이션을 next의 역순으로 해주려면 entry와 exit를 반대로 바꿔주면
        된다. 이게 custom prop이 필요한 이유.
        <br />
        custom prop을 쓰려면 custom을 사용할 variants 오브젝트 내부를 함수 형태로 바꿔줘야
        한다
        <br />
        버튼을 누르면 entry와 exit 애니메이션이 동시에 진행이 되는데, 이것을 순차적으로
        진행하게 할 수도 있다.
        <br />
        AnimatePresence에 exitBeforeEnter prop을 주면 된다. exit를 먼저 실행시키고 exit가
        끝나면 다음 element를 불러옴
      </Text>
    </Wrapper>
  );
}

export default Slider2;
