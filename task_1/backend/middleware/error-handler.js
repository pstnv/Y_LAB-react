import { StatusCodes } from "http-status-codes";
import { CustomError } from "../errors/index.js";

const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:
            (err instanceof CustomError && err.message) ||
            "Something went wrong. Try again later",
    };
    res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandler;
