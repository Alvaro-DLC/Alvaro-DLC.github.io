import styles from './Navbar.module.css';
import { DiCode } from "react-icons/di";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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

                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;