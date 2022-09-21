import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import "./App.css";

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
                            path="/item/:id"
                            element={
                                <ItemDetailContainer titleDetail="Detalle de producto" />
                            }
                        />
                        <Route
                            path="/category/:categid"
                            element={<ItemListContainer greeting="Categoría" />}
                        />
                        <Route path="/cart" element={<></>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
