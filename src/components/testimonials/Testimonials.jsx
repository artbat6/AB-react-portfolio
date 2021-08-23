import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jason Kerr",
      title: "Owner Little Kitchen HTX",
      img: "assets/jason.png",
      // icon: "assets/twitter.png",
      desc: "Arthur Bates is a thinker. Quick on his feet and an absolute pleasure to work with. Reliable and professional to the teeth. Arthur is one of the most creative employees I’ve ever had the honor to work with and is always striving to improve his skills."
    },
    // {
    //   id: 2,
    //   name: "Alex Kalinski",
    //   title: "Co-Founder of DELKA",
    //   img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/youtube.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
