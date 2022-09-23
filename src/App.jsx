import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import { Cart } from "./components/Container/Cart/Cart";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer greeting="H.D.P Smash Burgers" />
                            }
                        />
                        <Route
                            path="/categoria/:categid"
                            element={<ItemListContainer greeting="Categoría" />}
                        />
                        <Route
                            path="/detalle/:id"
                            element={
                                <ItemDetailContainer titleDetail="Detalle de producto" />
                            }
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
