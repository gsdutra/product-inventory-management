import {NextFunction, Request, Response } from 'express';
import * as salesService from '../services/salesService';

export async function createSale(req: Request, res: Response, next: NextFunction) {
	try {
		const { productId, amount } = req.body
		const sale = await salesService.createSale(productId, amount)
		res.status(200).send(sale)
	} catch (err) {
		// next(err)
		return res.status(err.statusCode).send(err.message)	
	}
}