import React from "react";
import './App.css';
import ParticlesBg from "particles-bg";
import Navigation from "./components/navigation/Navigation";
import InputURL from "./components/inputURL/InputURL";
import Rank from "./components/rank/Rank";

function App() {
  return (
    <div className="App">
    <ParticlesBg color="#f1f1f1" num={150} type="cobweb" bg={true} />
      <Navigation />
      <Rank />
      <InputURL />
      {/*<FaceRecognition />} */}
    </div>
  );
}

export default App;
