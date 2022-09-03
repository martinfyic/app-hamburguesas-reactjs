import Navbar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/Container/ItemDetailContainer";
import "./App.css";

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <ItemListContainer greeting="HDP Smash Burgers" /> */}
                <ItemDetailContainer titleDetail="HDP Smash Burgers" />
            </main>
        </>
    );
};

export default App;
