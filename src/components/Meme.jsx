import React from 'react'
import '../App.css'

function Meme() {
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
                className="form--btn">
                Get a new meme image 🖼
            </button>
        </div>
    </main>
  )
}

export default Meme