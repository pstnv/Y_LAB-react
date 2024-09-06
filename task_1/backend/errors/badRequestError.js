import { StatusCodes } from "http-status-codes";
import { CustomError } from "./index.js";

export default class BadRequestError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
