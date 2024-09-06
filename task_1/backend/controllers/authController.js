import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const testUser = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
};

const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError("Email and password are required");
    }
    const wrongPassword =
        email === testUser.email && password !== testUser.password;
    if (wrongPassword) {
        throw new UnauthenticatedError(
            "You have entered an invalid username or password"
        );
    }

    const exists = email === testUser.email && password === testUser.password;
    if (!exists) {
        throw new UnauthenticatedError(`User with email ${email} not found`);
    }
    res.status(StatusCodes.OK).send({ msg: "User logged in" });
};

export { login };
