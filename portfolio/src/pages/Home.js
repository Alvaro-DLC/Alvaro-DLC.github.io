import styles from '../global.css';
import pic from '../assets/Portrait_Placeholder.png'

const Home = () => {
    return (
        <div className="container">
            <div className="homeContainer">
                <div  style={{ flex: '50%' }} className="column">
                    <h1>Hello, I'm Alvaro</h1>
                    <sub>A software developer from California. Freshly graduated from CSUMB with a BA in Computer Science.</sub>

                </div>
                
                <div  style={{ flex: '50%' }} className="column">
                    <img src={pic} alt="portait placeholder" style={{ width: '400px'}}/>
                </div>
                    
            </div>
        </div>
    )
}

export default Home;