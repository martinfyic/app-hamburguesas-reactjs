import { Link } from "react-router-dom";
import styles from "../Footer/LogoFooter.module.css";
import logoFooter from "../../assets/logohdp.png";

export const LogoFooter = () => {
    return (
        <div className={styles.leftFooter}>
            <Link to={"/"}>
                <img src={logoFooter} alt="logo H.D.P" />
            </Link>
            <h4>SMASH BURGERS</h4>
        </div>
    );
};
