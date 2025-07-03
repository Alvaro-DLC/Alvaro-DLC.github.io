import { Link } from "react-router-dom";
import pic from '../assets/images/Portrait_Placeholder.png'

const Home = () => {
    return (
        <div className="container">
            <div style={{ marginTop: '8%', paddingLeft: "6%" }} className="flexContainer">
                <div style={{ width: '70%'}} className="column">
                    <p> 
                        <h1>Hello, I'm Alvaro</h1>
                        <hr style={{ height: '4px' }}/>
                        <h1>Software Developer</h1>
                    </p>

                    <Link to="/projects">
                        <button  type="button" >My Projects</button>
                    </Link>
                    
                    <button  type="button">My Resume</button>
                </div>
                <div className="column">
                    <img src={pic} alt="portait placeholder" style={{ width: '400px' }}/>
                </div>
            </div>

            <hr style={{ margin: '5%' }}/>

            <div>
                <h1>About Me</h1>
                <p style={{ maxWidth: '60%' }}>
                    <sub>
                        I'm a Software Developer with a B.A. in Computer Science from California State University, Monterey Bay. 
                        My passion for programming began in high school, where I discovered a love for problem solving and the 
                        creative challenge of building software. That early interest grew into a commitment to developing efficient, 
                        user-focused solutions — ultimately guiding me toward a career in software engineering.
                    </sub>
                </p>
            </div>
        </div>
    )
}

export default Home;