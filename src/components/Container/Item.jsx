import styles from "./Item.module.css";

export const Item = (prod) => {
    return (
        <li className={styles.itemCard}>
            <img
                className={styles.itemImage}
                width={230}
                height={280}
                src={prod.pictureUrl}
                alt={prod.title}
            />
            <h2 className={styles.itemTitle}>{prod.title}</h2>
            <p className={styles.itemPrice}>U$ {prod.price}</p>
            <p className={styles.itemStock}>Stock {prod.stock}</p>
            <button className={styles.AddButton}>Agregar</button>
        </li>
    );
};
