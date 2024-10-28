import Joi from "joi";

export const LoginformValidator = Joi.object({
    login: Joi.string()
        .required()
        .pattern(/^[a-zA-Z0-9]+$/)
        .messages({
            "object.regex": "field must be between 3 and 20 characters",
            "any.required": "field is required",
        }),
    password: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.min": "field must be between 3 and 20 characters",
        })
})