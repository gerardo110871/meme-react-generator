import React from 'react'
import MemeGuy from '../images/trollface.png'

function Header() {
  return (
    <header className="header">
        <img  className="header-img" src={MemeGuy} />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className='header-project'>React Course - Project 3</h4>
    </header>
  )
}

export default Header