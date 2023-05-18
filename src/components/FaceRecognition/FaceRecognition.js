import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2 h-1/2 flex justify-center">
                <img id="inputimage" src={imageUrl} alt="" className="object-contain h-3/4" />
            </div>
        </div>
    )
}

export default FaceRecognition;