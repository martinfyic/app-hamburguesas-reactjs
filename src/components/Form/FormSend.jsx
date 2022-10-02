import styled from "./FormSend.module.css";
import { FormSendDetailProd } from "./FormSendDetailProd";

export const FormSend = ({
    orderDetail,
    idOrder,
    countProducts,
    totalPrice,
}) => {
    const { name, direction } = orderDetail.buyer;
    const { itemBuy } = orderDetail;
    return (
        <div className={styled.ContainerSendForm}>
            <h2 className={styled.TitleName}>
                Gracias por tu compra{" "}
                <span className={styled.nameBuyer}>{name}</span>!
            </h2>
            <h3 className={styled.idPurch}>
                ID de compra: <span>{idOrder}</span>
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
                    Cantidad de productos comprados <span>{countProducts}</span>
                </p>
                <p>
                    Total a pagar <span>${totalPrice}</span>
                </p>
            </div>
            <hr />
        </div>
    );
};
