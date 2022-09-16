import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ImgBadage from "../assets/cartWidget.svg";

// function CartWidget() {
//     return (
//         <Button variant="bg-none">
//             <Badge bg="bg-none">
//                 {" "}
//                 <Link to={"/cart"}>
//                     <img src={ImgBadage} alt="carrito de compras" />
//                     <span className="px-2 fw-bold">3</span>
//                 </Link>
//             </Badge>
//             <span className="visually-hidden">unread messages</span>
//         </Button>
//     );
// }

// export default CartWidget;

export const CartWidget = () => {
    return (
        <Button variant="bg-none">
            <Badge bg="bg-none">
                {" "}
                <Link to={"/cart"}>
                    <img src={ImgBadage} alt="carrito de compras" />
                    <span className="px-2 fw-bold">3</span>
                </Link>
            </Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
};
