import React from 'react'

function Meme() {
  return (
      <main>
        <form ClassName="form">
            <input 
                className='form--input' 
                type="text" 
                placeholder="top text"/>
            <input 
                className='form--input' 
                type="text" 
                placeholder="bottom text"/>
            <button 
                className="form-btn">
                Get a new meme image 🖼
            </button>
        </form>
    </main>
  )
}

export default Meme