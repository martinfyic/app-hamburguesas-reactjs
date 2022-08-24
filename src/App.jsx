import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer";

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <ItemListContainer greeting="HDP Smash Burgers" />
            </main>
        </>
    );
};

export default App;
