import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import "./App.css";

// const App = () => {
//     return (
//         <>
//             <header>
//                 <Navbar />
//             </header>
//             <main>
//                 {/* <ItemListContainer greeting="HDP Smash Burgers" /> */}
//                 <ItemDetailContainer titleDetail="HDP Smash Burgers" />
//             </main>
//         </>
//     );
// };

// export default App;

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
                            <ItemDetailContainer titleDetail="H.D.P Smash Burgers" />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
