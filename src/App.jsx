import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import "./App.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer greeting="H.D.P Smash Burgers" />
                        }
                    />
                    <Route
                        path="/itemdetail"
                        element={
                            <ItemDetailContainer titleDetail="Detalle de producto" />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
