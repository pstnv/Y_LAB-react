import { Link } from "react-router-dom";
import style from "../assets/styles/pages/unavailable.module.css";
import bgNotFound from "../assets/images/bg/not-found.png";
import { Header } from "../features/UI";
import { useTitle } from "../services/constants/hooks";

const PageNotFound = () => {
    useTitle("404:Not Found");
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img src={bgNotFound} alt="page not found" />
            </div>
            <Header className={style.header}>
                <h1>
                    <span>404</span> Page not found
                </h1>
                <Link to="/">Home Page</Link>
            </Header>
        </div>
    );
};
export default PageNotFound;
