import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { CartEmpty } from "./CartEmpty";
import { CartWithProducts } from "./CartWithProducts";
import { CartTotalInfo } from "./CartTotalInfo";
import { FormPurch } from "./FormPurch";

export const Cart = () => {
    const { cart, deleteItemToCart, addItemToCart, clearCart } =
        useContext(CartContext);
    const [countProducts, setCountProducts] = useState(0);
    const [countPrice, setCountPrice] = useState(0);
    const [finishShop, setFinishShop] = useState(false);

    const handleFinish = () => {
        setFinishShop(!finishShop);
    };

    useEffect(() => {
        setCountProducts(cart.reduce((pre, curr) => pre + curr.quantity, 0));
    }, [cart]);

    useEffect(() => {
        setCountPrice(
            cart.reduce((pre, curr) => pre + curr.quantity * curr.price, 0)
        );
    }, [cart]);

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map((cartItem) => (
                            <CartWithProducts
                                key={cartItem.id}
                                cartItem={cartItem}
                                deleteItemToCart={deleteItemToCart}
                                addItemToCart={addItemToCart}
                            />
                        ))}
                    </div>
                    <CartTotalInfo
                        countProducts={countProducts}
                        countPrice={countPrice}
                        clearCart={clearCart}
                        handleFinish={handleFinish}
                        finishShop={finishShop}
                    />
                </>
            ) : (
                <CartEmpty />
            )}
            {finishShop && cart.length > 0 && <FormPurch />}
        </>
    );
};
