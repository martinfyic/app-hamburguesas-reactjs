import { useState } from "react";
import { ItemCount } from "./ItemCount";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
    const [bagShop, setBagShop] = useState(0);

    const addShopp = (addOnBag) => {
        setBagShop(addOnBag);
    };

    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={addShopp} />
            <div className={styles.ShoppingCart}>
                <p>Agregaste {bagShop} 🍔</p>
            </div>
        </>
    );
};

export default ItemListContainer;
