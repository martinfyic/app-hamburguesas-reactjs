import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ImgBadage from "../assets/cartWidget.svg";

function CartWidget() {
    return (
        <Button variant="bg-none">
            <Badge bg="bg-none">
                {" "}
                <img src={ImgBadage} alt="carrito de compras" />
                <span className="px-2 fw-bold">5</span>
            </Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
}

export default CartWidget;
