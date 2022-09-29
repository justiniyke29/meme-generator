import React from "react"

const  Header= () => {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt="trollFace"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">By Justiniyke</h4>
        </header>
    )
}

export default Header