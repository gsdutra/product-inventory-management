import {Request, Response } from 'express';
import * as salesService from '../services/salesService';

export async function createSale(req: Request, res: Response) {
	return salesService.createSale(1, 2)
}