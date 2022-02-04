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
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 300px;
  background-color: #addfee;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled(motion.button)`
  padding: 10px 22px;
  border: 0;
  outline: 0;
  color: blue;
  font-size: 35px;
  text-align: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const btn = {
  entryOn: {
    scale: 1,
    color: "rgb(0, 72, 255)",
  },
  centerOn: {
    scale: 1.2,
    color: "rgb(255, 131, 0)",
    transition: {
      duration: 0.2,
    },
  },
  centerOff: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function Challenge() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  // 타입스크립트에게 이 state는 null 아니면 string이라고 설명해줘야 한다
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          whileHover={{ scale: 1.1, x: -23, y: -15 }}
          layoutId="1"
        />
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          onClick={() => setId("2")}
          whileHover={{ scale: 1.1, x: 23, y: 15 }}
          layoutId="2"
        />
      </Grid>
      {id === "1" || id === "2" ? (
        <Overlay
          onClick={() => setId(null)}
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <Box
            layoutId={id}
            style={{ width: 475, height: 300, backgroundColor: "rgb(255, 255, 255)" }}
          />
        </Overlay>
      ) : null}
      <Btn
        variants={btn}
        initial="entryOn"
        animate={clicked ? "centerOn" : "centerOff"}
        onClick={toggleClicked}
      >
        switch
      </Btn>
    </Wrapper>
  );
}

export default Challenge;
