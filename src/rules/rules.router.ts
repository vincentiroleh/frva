/**
 * Required External Modules and Interfaces
 */

import express, {Request, Response} from "express";
import * as RuleService from "./rules.service";
import {UserRule, RuleCondition} from "./rule.interface";
import {validators} from "../middleware/rule.utils";

/**
 * Router Definition
 */

export const ruleRouter = express.Router();


/**
 * Controller Definitions
 */

// GET candidate

ruleRouter.get("/", async (req : Request, res : Response) => {
    try {
        const candidate: UserRule[] = await RuleService.getUser();
        res.status(200).json(candidate);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});


// POST rules

ruleRouter.post("/validate-rule", validators.RuleData, async (req : Request, res : Response) => {
    try {
        const post: RuleCondition = req.body;
        const newPost = await RuleService.validateRule(post);
        res.status(201).json(newPost);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
});
