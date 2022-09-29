import React from "react"

const Meme = ()=> { 

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    
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
    const [allMemes, setAllMemes] = React.useState([])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
       let url = allMemes[randomNumber].url
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
             {/*<pre>{JSON.stringify(allMemes, null, 2)}</pre>
                checked out the data being sent from the Api so as to modify my state,
                 to access the meme image url
             */}
        </main>
    )
}
export default Meme