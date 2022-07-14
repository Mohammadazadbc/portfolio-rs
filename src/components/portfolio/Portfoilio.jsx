import React, { useEffect, useState } from 'react'
import Portfoliolist from '../list/Portfoliolist';
import "./portfoilio.scss"
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data"
function Portfoilio() {
const [selected, setSelected] = useState("featured")
const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <div className='portfoilio' id='portfoilio'>
      <h1>Portfolio</h1>
      <ul>
      {list.map((item)=>(
          <Portfoliolist id={item.id} title={item.title} active={selected ===item.id} setSelected={setSelected} />
          
      ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
          <img src={d.img}  width="400" height="200" alt="" />
          <h3>{d.title} </h3>
          </div>
        ))}
       
      </div>
    </div>
  )
}

export default Portfoilio