import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <h4>Alvaro De La Cruz</h4>
            <sub>© {new Date().getFullYear()} All rights reserved.</sub>

            <div style={{ padding: "1%"}}>
                <a href="https://github.com/Alvaro-DLC"  target="_blank" rel="noreferrer">
                    <AiFillGithub size="3em"/>
                </a>
                
                <a href="https://www.linkedin.com/in/alvaro-dlc/"  target="_blank" rel="noreferrer">
                    <AiFillLinkedin size="3em"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;