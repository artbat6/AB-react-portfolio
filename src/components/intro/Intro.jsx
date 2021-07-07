import "./intro.scss"

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/arthur.png" alt="photo of Arthur"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Arthur Bates</h1>
                    <h3>Web Developer<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/eyes-arrows.png" alt="eyes looking down"/>
                </a>
            </div>
        </div>
    )
}

export default Intro
