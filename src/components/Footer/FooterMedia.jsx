import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../Footer/FooterMedia.module.css";

export const FooterMedia = () => {
    return (
        <div className={styles.iconContainer}>
            <a
                target={"_blank"}
                rel="noreferrer noopener"
                href="https://github.com/martinfyic"
            >
                <FontAwesomeIcon className={styles.iconMedia} icon={faGithub} />
            </a>
            <a
                target={"_blank"}
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/martin-ferreira-yic/"
            >
                <FontAwesomeIcon
                    className={styles.iconMedia}
                    icon={faLinkedin}
                />
            </a>
        </div>
    );
};
