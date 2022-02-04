import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  margin: 40px;
  font-family: "Comforter", cursive;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-center;
  margin: 0 auto;
`;

const Board = styled.div`
  margin: auto;
  margin-top: 8vh;
  margin-bottom: 10vh;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cac57e;
  height: 600px;
  width: 500px;
  flex-direction: column;
`;

const Li = styled.li`
  margin: 10px 0px 10px 0px;
  font-size: 28px;
  color: white;
`;

function Home() {
  return (
    <>
      <Title>Framer Motion sample</Title>
      <Container>
        <Board>
          <ul>
            <Li>
              <Link to="/firstAnimation">First Animation</Link>
            </Li>
            <Li>
              <Link to="/variants1">Variants 1</Link>
            </Li>
            <Li>
              <Link to="/variants2">Variants 2</Link>
            </Li>
            <Li>
              <Link to="/gestures">Gestures</Link>
            </Li>
            <Li>
              <Link to="/drag">Drag</Link>
            </Li>
            <Li>
              <Link to="/dragConstraints1">Drag Constraints 1</Link>
            </Li>
            <Li>
              <Link to="/dragConstraints2">Drag Constraints 2</Link>
            </Li>
            <Li>
              <Link to="/motionValues1">Motion Values 1</Link>
            </Li>
            <Li>
              <Link to="/motionValues2">Motion Values 2</Link>
            </Li>
            <Li>
              <Link to="/motionValues3">Motion Values 3</Link>
            </Li>
            <Li>
              <Link to="/motionValues4">Motion Values 4</Link>
            </Li>
            <Li>
              <Link to="/svgAnimation1">SVG Animation 1</Link>
            </Li>
            <Li>
              <Link to="/svgAnimation2">SVG Animation 2</Link>
            </Li>
          </ul>
        </Board>
        <Board>
          <ul>
            <Li>
              <Link to="/animatePresence">Animate Presence</Link>
            </Li>
            <Li>
              <Link to="/slider1">Slider 1</Link>
            </Li>
            <Li>
              <Link to="/slider2">Slider 2</Link>
            </Li>
            <Li>
              <Link to="/layoutProp">layout Prop</Link>
            </Li>
            <Li>
              <Link to="/shardLayoutAnimation">Shard Layout Prop</Link>
            </Li>
            <Li>
              <Link to="/final">Final Project</Link>
            </Li>
          </ul>
        </Board>
      </Container>
    </>
  );
}

export default Home;
