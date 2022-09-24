import styles from "./CartWithProducts.module.css";

export const CartWithProducts = ({
    cartItem,
    deleteItemToCart,
    addItemToCart,
}) => {
    return (
        <div key={cartItem.id} className={styles.CartContainer}>
            <img src={cartItem.pictureUrl} alt={cartItem.title} />
            <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>Producto: {cartItem.title}</p>
                <div className={styles.infoQuantity}>
                    <button onClick={() => deleteItemToCart(cartItem)}>
                        -
                    </button>
                    <p>Unidades {cartItem.quantity}</p>
                    <button onClick={() => addItemToCart(cartItem)}>+</button>
                </div>
                <p className={styles.infoSubTotal}>
                    Total ${cartItem.quantity * cartItem.price}
                </p>
            </div>
        </div>
    );
};
