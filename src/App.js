import { Route, Routes} from "react-router-dom";
import MainLayout from "./layout";
import Main from "./pages/Main";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </MainLayout>

    );
}

export default App;
