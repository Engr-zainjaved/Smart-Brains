import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2 h-1/2 flex justify-center">
                <img id="inputimage" src={imageUrl} alt="" className="object-contain h-3/4" />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
            </div>
        </div>
    )
}

export default FaceRecognition;