import {Request, Response } from 'express';
import * as categoriesService from '../services/categoriesService';

export async function createCategory(req: Request, res: Response) {
	return categoriesService.createOne('ff')	
}