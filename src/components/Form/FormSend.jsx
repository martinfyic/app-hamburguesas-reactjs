import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styled from "./FormSend.module.css";
import { FormSendDetailProd } from "./FormSendDetailProd";

export const FormSend = ({
    orderDetail,
    idOrder,
    countProducts,
    totalPrice,
}) => {
    const { clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const { name, direction } = orderDetail.buyer;
    const { itemBuy } = orderDetail;

    const finished = () => {
        navigate("/");
        clearCart();
    };

    return (
        <div className={styled.ContainerSendForm}>
            <h2 className={styled.TitleName}>
                Gracias por tu compra{" "}
                <span className={styled.nameBuyer}>{name}</span>!
            </h2>
            <h3 className={styled.idPurch}>
                ID: <span>{idOrder}</span>
            </h3>
            <p className={styled.direction}>
                Dirección de envío <span>{direction}</span>
            </p>
            <hr />
            <h4>Detalle del pedido:</h4>
            <ul>
                {itemBuy.map((prod) => (
                    <FormSendDetailProd key={prod.id} prod={prod} />
                ))}
            </ul>
            <div className={styled.totalDetail}>
                <p>
                    Cantidad de productos comprados:{" "}
                    <span>{countProducts}</span>
                </p>
                <p>
                    Total a pagar <span>${totalPrice}</span>
                </p>
            </div>
            <hr />
            <div className={styled.buttonContainer}>
                <button onClick={finished}>Salir</button>
            </div>
        </div>
    );
};
