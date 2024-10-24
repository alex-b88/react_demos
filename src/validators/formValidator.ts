import Joi from "joi";

export const formValidator = Joi.object({
    title: Joi.string()
        .required()
        .pattern(/^[a-zA-Z]{4,20}$/)
        .messages({
                "object.regex": "field must be between 3 and 20 characters",
                "any.required": "field is required",
    }),
    body: Joi.string()
        .min(10)
        .max(100)
        .required()
        .messages({
                "string.min": "min 10",
                "string.max": "max 100",
        })
})