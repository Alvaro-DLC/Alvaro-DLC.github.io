import styles from './Navbar.module.css';
import { DiCode } from "react-icons/di";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <h2 className={styles.title}>
                    <DiCode size="2em" color="lightblue" />
                    Alvaro De La Cruz
                </h2>
            </li>
            <li>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? styles.active : undefined}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? styles.active : undefined}
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? styles.active : undefined}
                >
                    Home
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;