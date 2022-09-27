import React from "react"
import memesData from "../memesData.js"

const Meme = ()=> { 
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const handleChange =(event)=>{
        const {name, value} = event.target
        setMeme(prev =>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       let url = memesArray[randomNumber].url
        setMeme(prevState =>({
            ...prevState,
            randomImage: url 
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="memeimage" className="meme-image"/>
                <h2 className="meme--text top">{meme.topText} </h2>
                <h2 className="meme--text bottom">{meme.bottomText} </h2>
            </div>

        </main>
    )
}
export default Meme