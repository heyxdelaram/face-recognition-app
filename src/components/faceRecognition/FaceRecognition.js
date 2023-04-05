import React from "react";

const FaceRecognition = ({imageURL}) => {
    return(
        <div>
            <img src={imageURL} alt="Facereco" style={{width: '500px', height: 'auto'}}/>
        </div>
    )
}

export default FaceRecognition;