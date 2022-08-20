import "./App.css";
import ItemListContainer from "./components/Container/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <>
            <header>
                <Navbar />
                <ItemListContainer greeting="HDP Smash Burgers" />
            </header>
        </>
    );
};

export default App;
