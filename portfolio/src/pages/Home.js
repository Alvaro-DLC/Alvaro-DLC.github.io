import { Link } from "react-router-dom";
import pic from '../assets/images/alvaro_dlc.JPG'

const Home = () => {
    return (
        <div className="container">
            <div className="flexContainer flexAdjustment">
                <div className="column">
                    <div className="text"> 
                        <h1>Hello, I'm Alvaro</h1>
                        <hr style={{ height: '4px' }}/>
                        <h1>Full-Stack Developer</h1>
                    </div>

                    <Link to="/projects">
                        <button  type="button" className="mobileButton">My Projects</button>
                    </Link>
                    

                    <a href="/alvaro_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button  type="button" className="mobileButton">My Resume</button>
                    </a>

                </div>
                <div className="column">
                    <img src={pic} alt="portait placeholder" className="profile" />
                </div>
            </div>

            <div className="subContainer">
                <h1 className="underlined">About Me</h1>
                <div className="textTwo">
                    <sub>
                        I'm a Software Developer with a B.A. in Computer Science from California State University, Monterey Bay.
                        I was proud to be part of the CSin3 program, an accelerated and intensive pathway that deepened my technical 
                        skills and strengthened my commitment to the field.
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
                    <button type="submit" className="mobileButton" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;