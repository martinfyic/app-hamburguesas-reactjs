import styles from "../Footer/Footer.module.css";
import { FooterComent } from "./FooterComent";
import { FooterMedia } from "./FooterMedia";
import { LogoFooter } from "./LogoFooter";

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <LogoFooter />
            <div className={styles.footerContainerMedia}>
                <FooterComent />
                <FooterMedia />
            </div>
        </footer>
    );
};
