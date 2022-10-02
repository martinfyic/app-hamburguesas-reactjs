import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import { FormPurch } from "./FormPurch";
import { FormSend } from "./FormSend";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Form = () => {
    const { register, handleSubmit } = useForm();
    const { cart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState();
    const [itemBuy, setItemBuy] = useState([]);
    const [idOrder, setIdOrder] = useState();
    const [orderDetail, setOrderDetail] = useState({});
    const [countProducts, setCountProducts] = useState(0);

    const onSubmit = (buyer) => {
        const order = { buyer, totalPrice, itemBuy };
        setOrderDetail(order);
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => setIdOrder(id));
    };

    useEffect(() => {
        setTotalPrice(
            cart.reduce((pre, curr) => pre + curr.quantity * curr.price, 0)
        );
    }, [cart]);

    useEffect(() => {
        setCountProducts(cart.reduce((pre, curr) => pre + curr.quantity, 0));
    }, [cart]);

    useEffect(() => {
        setItemBuy(
            cart.map((products) => ({
                id: products.id,
                quantity: products.quantity,
                title: products.title,
                price: products.price,
            }))
        );
    }, [cart]);

    return (
        <>
            {!idOrder ? (
                <FormPurch
                    register={register}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                />
            ) : (
                <FormSend
                    idOrder={idOrder}
                    orderDetail={orderDetail}
                    countProducts={countProducts}
                    totalPrice={totalPrice}
                />
            )}
        </>
    );
};
