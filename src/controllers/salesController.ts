import {NextFunction, Request, Response } from 'express';
import * as salesService from '../services/salesService';

export async function createSale(req: Request, res: Response, next: NextFunction) {
	try {
		return salesService.createSale(1, 2)
	} catch (err) {
		next(err)
	}
}