export interface UserRule {
    message: string;
    status: string;
    data: {
        name: string;
        github: string;
        email: string;
        mobile: string;
        twitter: string;
    }
};

export interface RuleCondition {
    rule: {
        field: string;
        condition: string;
        condition_value: number;
    }
    data: {
        name: string;
        crew: string;
        age: number;
        position: string,
        missions: number,
    }
}
