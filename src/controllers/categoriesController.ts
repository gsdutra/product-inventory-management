import {Request, Response, NextFunction } from 'express';
import * as categoriesService from '../services/categoriesService';

export async function createCategory(req: Request, res: Response, next: NextFunction) {
	try {
		const { name } = req.body
		const category = await categoriesService.createOne(name)
		res.status(200).send(category)
	} catch (err) {
		// next()
		return res.status(err.statusCode).send(err.message)	
	}
}