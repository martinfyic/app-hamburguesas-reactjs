import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ products }) => {
    return (
        <ul className={!products.length ? styles.snniper : styles.itemListGrid}>
            {!products.length ? (
                <div className={styles.snniperContainer}>
                    <span className={styles.loader}></span>
                </div>
            ) : (
                products.map((prod) => <Item key={prod.id} {...prod} />)
            )}
        </ul>
    );
};
