import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, PageNotFound, SignUp } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<Login />} path="login" />
                <Route element={<SignUp />} path="signup" />
                <Route element={<PageNotFound />} path="not-found" />
                <Route
                    path="*"
                    element={<Navigate to="/not-found" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
