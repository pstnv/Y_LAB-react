import { API_LOGIN_URL } from "../../../../services/constants/apiConstants";

export default async function loginUser(data) {
    try {
        const body = JSON.stringify(data);
        const params = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body,
        };
        const res = await fetch(API_LOGIN_URL, params);
        const { msg } = await res.json();
        if (Math.floor(res.status / 100) !== 2) {
            throw new Error(msg);
        }
        return msg;
    } catch (error) {
        console.log(error);
        return error.message || `Something went wrong. Try again later...`;
    }
}
