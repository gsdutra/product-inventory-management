import { Request, Response } from 'express'
import { ApplicationError } from '@/protocols'
export function handleErrors(err: ApplicationError, req: Request, res: Response){
	console.log(err)
	return res.status(err.statusCode).send(err.message)
}