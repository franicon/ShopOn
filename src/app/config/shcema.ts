import * as Joi from 'joi';

export const ConfigSchema = Joi.object({
  PORT: Joi.number(),

  MONGO_URI: Joi.required(),
});
