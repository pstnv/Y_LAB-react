import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationCircle } from "react-icons/fa";
import { Message } from "../../../../UI";

import {
    selectMessage,
    clearMessage,
} from "../../../../../services/redux/slices";
import style from "../../../../../assets/styles/Toast.module.css";

const Toast = () => {
    const message = useSelector(selectMessage);

    const dispatch = useDispatch();

    useEffect(() => {
        if (message) {
            setTimeout(setTimeout(() => dispatch(clearMessage()), 3500));
        }
    }, [message, dispatch]);

    const className = [style.message, message && style.show].join(" ");

    return (
        <Message className={className}>
            <span>
                <FaExclamationCircle />
            </span>
            {message}
        </Message>
    );
};

export default Toast;
