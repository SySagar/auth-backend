import { compare, hash } from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS)

export const hashPassword = async (plainPassword) => {
	const hashedPassword =  await hash(plainPassword, saltRounds)
	return hashedPassword
}

export const comparePasswords = async (plainPassword, hashedPassword) => {
	return await compare(plainPassword, hashedPassword)
}