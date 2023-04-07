import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageURL, box, fixBrokenImg}) => {
    return(
        <div className="m-5">
            <div className="relative">
                <img id="clarifai_img" src={imageURL} alt="" onError={fixBrokenImg} style={{width: 'auto', height: 'auto'}}/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;

