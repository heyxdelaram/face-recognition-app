import React from "react";
import './App.css';
import ParticlesBg from "particles-bg";
import Navigation from "./components/navigation/Navigation";
import InputURL from "./components/inputURL/InputURL";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const box_info = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("clarifai_img");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(box_info)

    console.log(width, height)
    
    return({
      bottomRow: height - (height * box_info.bottom_row),
      leftCol: width * box_info.left_col,
      rightCol: width - (width * box_info.right_col),
      topRow: height * box_info.top_row
    }) 
  }

  setBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetect = () => {
    this.setState({imageURL: this.state.input})
    //clarifai api
    const PAT = 'ffae339de9274a0caaa6fc30af8c8710';
    const USER_ID = 'heyxdelaram';       
    const APP_ID = 'face-recognition-app';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => this.setBox(this.calculateFaceLocation(result)))
        .catch(error => console.log('error', error));
  }

  render(){
    return (
      <div className="App">
      <ParticlesBg color="#f1f1f1" num={150} type="cobweb" bg={true} />
        <Navigation />
        <Rank />
        <InputURL onInputChange={this.onInputChange} onDetect={this.onDetect}/>
        <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
      </div>
    );
  }

}

export default App;
