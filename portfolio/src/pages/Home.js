import { Link } from "react-router-dom";
import pic from '../assets/images/Portrait_Placeholder.png'

const Home = () => {
    return (
        <div className="container">
            <div className="flexContainer flexAdjustment">
                <div style={{ width: '70%'}} className="column">
                    <div className="text"> 
                        <h1>Hello, I'm Alvaro</h1>
                        <hr style={{ height: '4px' }}/>
                        <h1>Full-Stack Developer</h1>
                    </div>

                    <Link to="/projects">
                        <button  type="button" >My Projects</button>
                    </Link>
                    
                    <button  type="button">My Resume</button>
                </div>
                <div className="column">
                    <img src={pic} alt="portait placeholder" style={{ width: '400px' }}/>
                </div>
            </div>

            <div className="subContainer">
                <h1 className="underlined">About Me</h1>
                <div className="textTwo">
                    <sub>
                        I'm a Software Developer with a B.A. in Computer Science from California State University, Monterey Bay. 
                        My passion for programming began in high school, where I discovered a love for problem solving and the 
                        creative challenge of building software. That early interest grew into a commitment to developing efficient, 
                        user-focused solutions — ultimately guiding me toward a career in software engineering.
                    </sub>
                </div>
            </div>

            <div className="subContainer" id="contactForm">
                <h1 className="underlined">Contact</h1>
                    
                <form action="https://api.web3forms.com/submit" method="POST" className="contactContainer">
                   <input type="hidden" name="access_key" value="20f07d8d-79f4-46cd-9312-1336a5081127"></input>

                    <input type="text" name="name" placeholder="Your Name" className="contactInput" required ></input>
                    <input type="text" name="email" placeholder="Your Email" className="contactInput" required ></input>
                    <textarea name="message" placeholder="Your Message" className="contactInput" required ></textarea>
                    <button type="submit" style={{ margin: '50px' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;