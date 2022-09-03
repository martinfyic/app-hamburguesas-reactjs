import { ItemList } from "./ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            <ItemList />
            {/* <div className={styles.ShoppingCart}>
                <p>Agregaste {0} 🍔</p>
            </div> */}
        </>
    );
};

export default ItemListContainer;
