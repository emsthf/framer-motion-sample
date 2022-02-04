import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drag from "./components/Drag";
import FirstAnimation from "./components/FirstAnimation";
import Gestures from "./components/Gestures";
import VariantsEx1 from "./components/VariantsEx1";
import VariantsEx2 from "./components/VariantsEx2";
import Home from "./page/Home";
import MotionValues1 from "./components/MotionValues1";
import MotionValues2 from "./components/MotionValues2";
import MotionValues3 from "./components/MotionValues3";
import DragConstraints1 from "./components/DragConstrains1";
import DragConstraints2 from "./components/DragConstraints2";
import MotionValues4 from "./components/MotionValues4";
import SVG_animation1 from "./components/SVG_animation1";
import SVG_animation2 from "./components/SVG_animation2";
import AnimatePresenceSample from "./components/animatePersence/AnimatePresenceSample";
import Slider1 from "./components/animatePersence/Slider1";
import Slider2 from "./components/animatePersence/Slider2";
import LayoutProp from "./components/animatePersence/LayoutProp";
import ShardLayoutAnimation from "./components/animatePersence/ShardLayoutAnimation";
import Final from "./components/animatePersence/Final";
import Challenge from "./components/animatePersence/Challenge";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/firstAnimation" element={<FirstAnimation />} />
        <Route path="/variants1" element={<VariantsEx1 />} />
        <Route path="/variants2" element={<VariantsEx2 />} />
        <Route path="/gestures" element={<Gestures />} />
        <Route path="/drag" element={<Drag />} />
        <Route path="/dragConstraints1" element={<DragConstraints1 />} />
        <Route path="/dragConstraints2" element={<DragConstraints2 />} />
        <Route path="/motionValues1" element={<MotionValues1 />} />
        <Route path="/motionValues2" element={<MotionValues2 />} />
        <Route path="/motionValues3" element={<MotionValues3 />} />
        <Route path="/motionValues4" element={<MotionValues4 />} />
        <Route path="/svgAnimation1" element={<SVG_animation1 />} />
        <Route path="/svgAnimation2" element={<SVG_animation2 />} />
        <Route path="/animatePresence" element={<AnimatePresenceSample />} />
        <Route path="/slider1" element={<Slider1 />} />
        <Route path="/slider2" element={<Slider2 />} />
        <Route path="/layoutProp" element={<LayoutProp />} />
        <Route path="/shardLayoutAnimation" element={<ShardLayoutAnimation />} />
        <Route path="/final" element={<Final />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
