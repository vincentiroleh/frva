import HttpException from "../common/http-exception";
import {Request, Response, NextFunction} from "express";
import {RuleCondition} from "../rules/rule.interface";

export const errorHandler = (error : HttpException, request : Request, response : Response, next : NextFunction) => {
    const status = error.statusCode || error.status || 500;

    response.status(status).json({error});
};

export const RuleData = (request : Request, response : Response, next : NextFunction) => {
    const obj: RuleCondition = request.body;
    if (! obj.data) {
        return response.status(400).json({message: "data is required.", status: "error", data: null})
    } else if (! obj.rule) {
        return response.status(400).json({message: "rule is required.", status: "error", data: null})
    } else if (typeof obj.data !== "object" && typeof obj.data !== "string") {
        return response.status(400).json({message: "rule is required.", status: "error", data: null})
    } else {
        return next();
    }
}
