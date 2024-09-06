import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import style from "../../../../../assets/styles/Form.module.css";
import { FormHeader } from "../../components";
import { InputWithLabel, Button } from "../../../../UI";
import {
    setMessage,
    selectIsToasting,
    selectIsLoading,
    loginUser,
} from "../../../../../services/redux/slices";
import { TEST_USER } from "../../../../../services/constants/apiConstants";

const Form = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isToasting = useSelector(selectIsToasting);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        if (!email || !password) {
            dispatch(
                setMessage(
                    "Please fill in the fields that are marked as required"
                )
            );
            return;
        }
        dispatch(loginUser(credentials));
    };

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setCredentials((prevState) => ({ ...prevState, [key]: value }));
    };

    const handleTestUserBtn = (e) => {
        setCredentials((prevState) => ({ ...prevState, ...TEST_USER }));
    };

    return (
        <form className={style.form} onSubmit={handleFormSubmit}>
            <FormHeader className={style.header} />
            <InputWithLabel
                type="email"
                id="email"
                name="email"
                required
                placeholder="email"
                aria-label="email"
                autoComplete="false"
                className={style.input}
                value={credentials.email}
                onChange={handleInputChange}
            >
                <FaEnvelope />
            </InputWithLabel>
            <InputWithLabel
                type="password"
                id="password"
                name="password"
                required
                placeholder="password"
                aria-label="password"
                className={style.input}
                value={credentials.password}
                onChange={handleInputChange}
            >
                <FaLock />
            </InputWithLabel>
            <Link to="/signup" className={style.link}>
                Don't have an account? Sign up
            </Link>
            <Button
                type="button"
                aria-label="test user"
                disabled={isLoading || isToasting}
                className={style.buttonTest}
                onClick={handleTestUserBtn}
            >
                {
                    <>
                        <FaUser />
                        <span>Test user</span>
                    </>
                }
            </Button>
            <Button
                type="submit"
                aria-label="login"
                disabled={isLoading || isToasting}
                className={style.button}
            >
                Login
            </Button>
        </form>
    );
};

export default Form;
