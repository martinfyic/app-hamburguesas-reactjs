import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (prod) => {
    return (
        <li key={prod.id} className={styles.itemCard}>
            <img
                loading="lazy"
                className={styles.itemImage}
                width={260}
                src={prod.pictureUrl}
                alt={prod.title}
            />
            <h2 className={styles.itemTitle}>{prod.title}</h2>
            <p className={styles.itemPrice}>$ {prod.price}</p>
            <Link to={`item/${prod.id}`}>
                <button className={styles.AddButton}>COMPRAR</button>
            </Link>
        </li>
    );
};
