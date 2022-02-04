import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 255, 213), rgb(255, 166, 0));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  font-size: 35px;
  text-align: center;
  line-height: 1.2;
  position: absolute;
  top: 80px;
`;

function Final() {
  // 타입스크립트에게 이 state는 null 아니면 string이라고 설명해줘야 한다
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        {/* 4개의 박스를 만들기 위해 4개짜리 배열을 만들고 map을 돌림. layoutId는 string을 받아야 하므로 배열 값을 string으로 줘서 반복함 */}
        {["Happy🥳", "Lunar🌙", "New🎆", "Year🐯"].map((item) => (
          <Box onClick={() => setId(item)} key={item} layoutId={item}>
            {item}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {/* Box를 클릭해서 setId()로 해당 박스 id가 저장되어 id가 존재하면 Overlay를 보여준다 */}
        {id ? (
          <Overlay
            // Overlay를 클릭 시 id에 null을 저장해서 Overlay를 숨긴다
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            {/* Overlay에 있는 Box 컴포넌트와 하나로 여겨지는 것은 Grid에서 id가 선택된 Box */}
            <Box layoutId={id} style={{ width: 400, height: 200 }}>
              {id}
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Final;
