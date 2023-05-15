import React from "react";

const ImageLinkForm = () => {
    return (
        <div>
            <p className="text-3xl">
                This will detect your face, Give it a try
            </p>
            <div>
                <input className="p-4 rounded-full w-1/4 h-8 m-3 align-middle" type="text" />
                <button className="rounded-full h-9 w-32 bg-blue-500 hover:bg-blue-600 text-white font-bold transition duration-200 transform hover:scale-105">
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;