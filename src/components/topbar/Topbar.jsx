import React from 'react'
import "./topbar.scss"
import {BsFillPersonFill} from "react-icons/bs"
 import {MdMail} from "react-icons/md"

function Topbar({setMenuOpen, menuOpen}) {
  return (
    <div className={'topbar ' +(menuOpen && "active")} id='topbar'> 
    <div className="wrapper ">
      <div className="left">
        <a href="#intro" className='logo'>geinus.</a>
        <div className="itemContainer">
          <BsFillPersonFill className='icon' />
          <span>466459209</span>
        </div>
        <div className="itemContainer">
          { <MdMail className='icon' /> }
          <span>azadjan84@gmail.com</span>
        </div>
      </div>

      {/* // RIGHT BAR */}
      <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Topbar