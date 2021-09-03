import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Group Projects",
    },
    {
      id: "web",
      title: "Bootcamp Challenges",
    },
    // {
    //   id: "mobile",
    //   title: "Tutorials",
    // },
    {
      id: "design",
      title: "Design",
    },
    // {
    //   id: "content",
    //   title: "Content",
    // },
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
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.href} alt="" target="_blank">
              <img src={d.img} alt="" />
            </a>
            <h3 className="titleText"> {d.title}</h3>
            <p className="description"> {d.description}</p>
            <a href={d.githref} className="git">{d.github}</a>
         </div>
        ))}
      </div>
    
     </div>
    
  );
}
