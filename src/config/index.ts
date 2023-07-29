import { registerAs } from '@nestjs/config';

export const Config = registerAs('', () => ({
  env: process.env.APP_ENV,

  port: process.env.PORT,

  databases: {
    mongoUri: process.env.MONGO_URI,
  },

  jwt: {},

  admin: {},

  cors: {
    origin: String(process.env.CORS_ORIGIN).split(',') as string[],
  },

}));
