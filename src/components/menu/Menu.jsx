import React from 'react'
import "./menu.scss"
function Menu({setMenuOpen, menuOpen}) {
  return (
    <div className={'menu '+(menuOpen && "active") }>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfoilio">Portfoilio</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#testimponial">Testimponial</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu