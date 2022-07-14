import React from 'react'
import "./menu.scss"
function Menu({setMenuOpen, menuOpen}) {
  return (
    <div className={'menu '+(menuOpen && "active") }>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfoilio">Portfoilio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Work</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimponial">Testimponial</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu