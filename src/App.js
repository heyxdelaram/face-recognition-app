import React from "react";
import './App.css'
import ParticlesBg from "particles-bg";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
    <ParticlesBg color="#f1f1f1" num={150} type="cobweb" bg={true} />
      <Navigation />
      {/* {<Rank />
      <InputURL />
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
