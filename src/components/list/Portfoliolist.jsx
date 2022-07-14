import React from 'react'
import "./portfoliolist.scss"
function Portfoliolist({id,title,active, setSelected}) {
  return (
    <li className={active ? 'porfolioList active' :'porfolioList'} onClick={()=>setSelected(id)} >
        {title}
    </li>
  )
}

export default Portfoliolist