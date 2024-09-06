import { Link } from "react-router-dom";
import style from "../assets/styles/pages/unavailable.module.css";
import bgUnderConstruction from "../assets/images/bg/under-construction.jpg";
import { Header } from "../features/UI";
import { useTitle } from "../services/constants/hooks";

const SignUp = () => {
    useTitle("Sign Up");
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img src={bgUnderConstruction} alt="page under construction" />
            </div>
            <Header className={style.header}>
                <h1>We're coming soon</h1>
                <Link to="/">Home Page</Link>
            </Header>
        </div>
    );
};
export default SignUp;
