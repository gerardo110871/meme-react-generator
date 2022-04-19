import React, {useState} from 'react'
import MemeData from './MemeData'

function Meme() {
    const [memeImage, setMemeImage] = useState('')
    
    function getMemeImage() {
        const memesArray = MemeData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomMeme].url)
    }
      return (
      <main>
        <div className="form">
            <input 
                className='form--input' 
                type="text" 
                placeholder="top text"/>
            <input 
                className='form--input' 
                type="text" 
                placeholder="bottom text"/>
            <button 
                className="form--btn"
                onClick={getMemeImage}
                >
                Get a new meme image 🖼
            </button>
        </div>
        <img src={memeImage} className="meme--image"/>
    </main>
  )
}

export default Meme