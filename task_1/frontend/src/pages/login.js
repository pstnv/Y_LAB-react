import { LoginForm, ToastMessage } from "../features/users/login";
import style from "../assets/styles/pages/login.module.css";
import { useTitle } from "../services/constants/hooks";

const Login = () => {
    useTitle("Login");
    return (
        <div className={style.login}>
            <LoginForm />
            <ToastMessage />
        </div>
    );
};
export default Login;
