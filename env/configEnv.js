import dotenv from 'dotenv'

dotenv.config({ path: './env/.env'})

export const puerto = process.env.PORT
export const user = process.env.USER
export const pass = process.env.PASS
export const database = process.env.DATABASE
export const host = process.env.HOST