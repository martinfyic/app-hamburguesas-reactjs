import { useContext, useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import cssStyled from "./CartWidget.module.css";
import { CartContext } from "../../context/CartContext";
import ImgBadage from "../assets/cartWidget.svg";

export const CartWidget = () => {
    const [productInCart, setProductInCart] = useState(0);

    const { cart } = useContext(CartContext);

    useEffect(() => {
        setProductInCart(cart.reduce((pre, curr) => pre + curr.quantity, 0));
    }, [cart]);

    return (
        <Button variant="bg-none">
            <Badge bg="bg-none">
                {" "}
                <Link className={cssStyled.LinkCart} to={"/cart"}>
                    <img src={ImgBadage} alt="carrito de compras" />
                    <span className={cssStyled.cartCounter}>
                        {cart.length > 0 && productInCart}
                    </span>
                </Link>
            </Badge>
        </Button>
    );
};
