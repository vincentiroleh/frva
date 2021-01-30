import {Request, Response, NextFunction} from "express";
import {validRule} from "../common/valid.rule";

export const validators = {

    async RuleData(request : Request, response : Response, next : NextFunction) {
        const obj = request.body;
        const data = obj.data;
        const rule = obj.rule;

        if (! data) {
            return response.status(400).json({message: "data is required.", status: "error", data: null})
        } else if (! rule) {
            return response.status(400).json({message: "rule is required.", status: "error", data: null})
        } else if (typeof data !== "object" && !Array.isArray(data) && typeof data !== "string") {
            return response.status(400).json({message: "data should be either an object or an array or a string.", status: "error", data: null})
        } else if (typeof rule !== "object") {
            return response.status(400).json({message: "rule should be an object.", status: "error", data: null})
        // } else if (! data[rule.field]) {
        //     console.log(data[rule.field])

        //     return response.status(400).json({
        //             message: `field ${
        //             rule.field
        //         } is missing from data.`,
        //         status: "error",
        //         data: null
        //     })
        } else if (! rule.field) {
            return response.status(400).json({message: "rule field is required.", status: "error", data: null})
        } else if (! rule.condition) {
            return response.status(400).json({message: "rule condition is required.", status: "error", data: null})
        } else if (! rule.condition_value) {
            return response.status(400).json({message: "rule condition value is required.", status: "error", data: null})
        }
        if (validRule(rule, data)) {
            return response.status(200).json({
                    message: `field ${
                    rule.field
                } successfully validated.`,
                status: "success",
                data: {
                    validation: {
                        error: false,
                        field: rule.field,
                        field_value: data[rule.field],
                        condition: rule.condition,
                        condition_value: rule.condition_value
                    }
                }
            })
        }
        return next();
    }

}
