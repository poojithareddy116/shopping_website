import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
    return (
        <div className='App'>
            <Nav/>
            <Cart />
            <HomeScreen/>
        </div>
    );
};

export default App;