import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";
import { useState } from 'react';

const Animation = () => (
  <div style={{ width: 100 }}>
    <Lottie animationData={groovyWalkAnimation} />
  </div>
);

const First = () => (
  <div>
    First
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
  </div>
);

const Second = () => (
  <div>
    Second
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
    <Animation />
  </div>
);

function App() {
  const [isFirst, setIsFirst] = useState(true);

  return (
    <div>
      <button onClick={() => setIsFirst(!isFirst)}>
        Switch
      </button>
      {isFirst && <First />}
      {!isFirst && <Second />}
    </div>
  )
}

export default App;
