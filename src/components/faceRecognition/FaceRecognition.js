import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageURL, box}) => {
    return(
        <div className="m-5">
            <img id="clarifai_img"className="br4 grow shadow-5" src={imageURL} alt="Facereco" style={{width: 'auto', height: '400px'}}/>
            <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}></div>
        </div>
    )
}

export default FaceRecognition;