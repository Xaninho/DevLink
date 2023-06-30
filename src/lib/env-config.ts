import dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.API_KEY;
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
export const PROJECT_ID = process.env.PROJECT_ID;
export const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
export const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
export const APP_ID = process.env.APP_ID;
export const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

export const FB_PROJECT_ID = process.env.FB_PROJECT_ID;
export const FB_CLIENT_EMAIL = process.env.FB_CLIENT_EMAIL;
export const FB_PRIVATE_KEY = process.env.FB_PRIVATE_KEY;