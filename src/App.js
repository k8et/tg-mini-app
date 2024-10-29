import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout";
import Main from "./pages/Main";
import Dish from "./pages/Dish";
import Shop from "./pages/Shop";
import Friends from "./pages/Friends";
import Rewards from "./pages/Rewards";
import Wallet from "./pages/Wallet";


function App() {

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/dish" element={<Dish/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/rewards" element={<Rewards/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
            </Routes>
        </MainLayout>

    );
}

export default App;
