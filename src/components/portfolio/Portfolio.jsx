import "./portfolio.scss";

function Portfolio() {

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

    return (
        <div className="portfolio" id="portfolio">
           <h1>Portfolio</h1>
           <ul>
               {list.map(item=>(
                   <PortfolioList title={item.title}/>
               ))}
               
             </ul>
             <div className="container">
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
                 <div className="item">
                     <img src="https://www.scnsoft.com/boss/images/990-2-award-winning-mobile-banking-app---sciencesoft.jpg" 
                     alt="banking app" />
                     <h3>Banking App</h3>
                 </div>
             </div>
        </div>
    )
}

export default Portfolio
