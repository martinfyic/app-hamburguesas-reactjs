import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemListContainer } from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import Navbar from "./components/NavBar/NavBar";
import { Form } from "./components/Form/Form";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

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
                        <Route path="/formulario" element={<Form />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
