import {Request, Response, NextFunction} from "express";
import {RuleCondition} from "../rules/rule.interface";


export const validators = {
    async RuleData(request : Request, response : Response, next : NextFunction) {
        const obj: RuleCondition = request.body;
        if (! obj.data) {
            return response.status(400).json({message: "data is required.", status: "error", data: null})
        } else if (! obj.rule) {
            return response.status(400).json({message: "rule is required.", status: "error", data: null})
        } else if (typeof obj.data !== "object" && !Array.isArray(obj.data) && typeof obj.data !== "string") {
            return response.status(400).json({message: "data should be either an object or an array or a string.", status: "error", data: null})
        } else if (typeof obj.rule !== "object") {
            return response.status(400).json({message: "rule should be an object.", status: "error", data: null})
        } else if (!Object.keys(obj.data).includes(obj.rule.field)) {
            return response.status(400).json({
                    message: `field ${
                    obj.rule.field
                } is missing from data.`,
                status: "error",
                data: null
            })
        } else if (! obj.rule.field) {
            return response.status(400).json({message: "rule field is required.", status: "error", data: null})
        } else if (! obj.rule.condition) {
            return response.status(400).json({message: "rule condition is required.", status: "error", data: null})
        } else if (! obj.rule.condition_value) {
            return response.status(400).json({message: "rule condition value is required.", status: "error", data: null})
        }
        return next();
    }
}
