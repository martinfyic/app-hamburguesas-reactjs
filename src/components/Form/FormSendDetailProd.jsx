import styled from "./FormSendDetailProd.module.css";

export const FormSendDetailProd = ({ prod }) => {
    return (
        <>
            <li className={styled.DetailContainer}>
                <p>
                    Producto: <span>{prod.title}</span>
                </p>
                <p>
                    Precio : <span>${prod.price}</span>
                </p>
                <p>
                    Cantidad: <span>{prod.quantity}</span>
                </p>
                <p>
                    Sub total: <span>${prod.quantity * prod.price}</span>
                </p>
            </li>
            <hr />
        </>
    );
};
