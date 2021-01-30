/**
 ** Data Model Interfaces
 */

import {UserRule, RuleCondition} from "./rule.interface";

/**
 ** In-Memory Store
 */

let candidate: UserRule = {
    "message": "My Rule-Validation API",
    "status": "success",
    "data": {
        "name": "Vincent Iroleh",
        "github": "@vincentiroleh",
        "email": "irolehiroleh@gmail.com",
        "mobile": "+2348165152414",
        "twitter": "@IrolehVincent"
    }
}

/**
 ** Service Methods
 */

export const getUser = async () : Promise < UserRule[] > => Object(candidate);
export const validateRule = async (newPost : RuleCondition) : Promise < [] > => Object(newPost);
