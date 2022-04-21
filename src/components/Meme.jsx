import React, {useState} from 'react'

function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })
    const [allMemes, setAllMemes] = useState([])
    
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    console.log(allMemes)

    function getMemeImage() {
        const randomMeme = Math.floor(Math.random() * allMemes.length)
        const url = (allMemes[randomMeme].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
      return (
      <main>
        <div className="form">
            <input 
                className='form--input' 
                type="text" 
                placeholder="top text"
                name='topText'
                value={meme.topText}
                onChange={handleChange}
                />
            <input 
                className='form--input' 
                type="text" 
                placeholder="bottom text"
                name='bottomText'
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
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  )
}

export default Meme