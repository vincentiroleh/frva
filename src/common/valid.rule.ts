export const validRule = (rule : any, data : any) => {
    const result = rule.condition === "eq" ? data[rule.field] === rule.condition_value : rule.condition === "neq" ? data[rule.field] !== rule.condition_value : rule.condition === "gt" ? data[rule.field] > rule.condition_value : rule.condition === "gte" ? data[rule.field] >= rule.condition_value : rule.condition === "contains" ? data[rule.fields].includes(rule.condition_value) : "";
    return result;
}

