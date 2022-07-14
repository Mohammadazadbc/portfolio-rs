import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from "ityped"
function Intro() {
  const textRef = useRef();
  useEffect(()=>{
      init(textRef.current,{
        showCursor:false,
        backDelay:1500,
        backDelay:1500,
        backSpeed:60,
        strings:["Developer","Designer"]
      })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="./assete/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohammad Azad</h1>
          <h3>Frontend <span ref={textRef}></span> </h3>
        </div>
        <a href="#portfoilio">
          <img src="./assete/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro