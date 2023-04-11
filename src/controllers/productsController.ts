import {Request, Response } from 'express';
import productsService from '../services/products-service';

export async function getAllProducts(req: Request, res: Response) {
	try {
		const products = await productsService.getAllProducts();
		res.status(200).send(products);
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}
	
export async function getProductById(req: Request, res: Response) {
	try {
		const { id } = req.params
		const product = await productsService.getProductById(id)
		res.sendStatus(201)
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function createProduct(req: Request, res: Response) {
	try {
		
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function updateProduct(req: Request, res: Response) {
	try {
		
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function deleteProduct(req: Request, res: Response) {
	try {
		
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}