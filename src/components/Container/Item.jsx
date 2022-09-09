import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (prod) => {
    return (
        <li className={styles.itemCard}>
            <img
                loading="lazy"
                className={styles.itemImage}
                width={260}
                src={prod.pictureUrl}
                alt={prod.title}
            />
            <h2 className={styles.itemTitle}>{prod.title}</h2>
            <p className={styles.itemPrice}>$ {prod.price}</p>
            <p className={styles.itemStock}>Stock {prod.stock}</p>
            <Link to={`item/${prod.id}`}>
                <button className={styles.AddButton}>VER +</button>
            </Link>
        </li>
    );
};
