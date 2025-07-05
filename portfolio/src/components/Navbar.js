import styles from './Navbar.module.css';
import { DiCode } from "react-icons/di";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = (e) => {
        e.preventDefault();

        if (location.pathname !== "/") {
            navigate("/", { repalce: false });
            setTimeout(() => {
                const el= document.getElementById("contactForm");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const el = document.getElementById("contactForm");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                <DiCode size="2em" color="#967ca6" />
                <span>Alvaro De La Cruz</span>
            </div>

            <div className={styles.navLinks}>
                <NavLink 
                    to="/"
                    end
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                >
                    Projects
                </NavLink>

                {/* <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                >
                    Contact
                </NavLink> */}

                <span onClick={handleContactClick} className={styles.link} style={{ cursor: "pointer" }}>Contact</span>
            </div>
        </nav>
    )
}

export default Navbar;