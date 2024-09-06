import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, PageNotFound, SignUp } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<Login />} exact path="/login" />
                <Route element={<SignUp />} exact path="/signup" />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
