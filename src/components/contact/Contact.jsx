import { useState } from "react";
import "./contact.scss"

function Contact() {

  const [message, setMessage] = useState(false)

  const handleSumbit =(e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact"> 
    <div className="left">
      <img src="assete/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
    </div>
    </div>
  )
}

export default Contact