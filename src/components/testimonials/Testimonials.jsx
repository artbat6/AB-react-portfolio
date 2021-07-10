import "./testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              src="https://leviathyn.com/wp-content/uploads/2013/06/41.jpg"
              alt="tobias"
            />
            <img src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            porro, nisi illo magni corrupti delectus minima dolor est eum
            eveniet!
          </div>
          <div className="bottom">
              <h3>Tobias Funke</h3>
              <h4>Actor</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
