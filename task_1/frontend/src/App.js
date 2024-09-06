import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, PageNotFound, SignUp } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<Login />} exact path="/login" />
                <Route element={<SignUp />} exact path="/signup" />
                <Route element={<PageNotFound />} exact path="/not-found" />
                <Route
                    path="*"
                    element={<Navigate to="/not-found" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
