import HttpException from "../common/http-exception";
import {Request, Response, NextFunction} from "express";

export const errorHandler = (error : HttpException, request : Request, response : Response, next : NextFunction) => {
    const status = error.statusCode || error.status || 500;

    response.status(status).json({error});
};

export const notFoundHandler = (request : Request, response : Response, next : NextFunction) => {

    const message = {
        status: 404,
        message: "Resource not found"
    };

    response.status(404).json(message);
};

export const payloadHandler = (error : HttpException, request : Request, response : Response, next : NextFunction) => {
    const errorMessage = {
        message: "Invalid JSON payload passed.",
        status: "error",
        data: {} || null
    };

    if (error) {
        return response.status(400).json(errorMessage);
    }

}
