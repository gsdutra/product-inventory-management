import {Request, Response } from 'express';
import * as productsService from '../services/productsService';
import {product} from '@/protocols'

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
		res.status(200).send(product)
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function createProduct(req: Request, res: Response) {
	try {
		const data = req.body
		await productsService.createProduct(data as product)
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function updateProduct(req: Request, res: Response) {
	try {
		const {id} = req.params
		const data = req.body
		await productsService.updateProduct(id as string, data as product)
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export async function deleteProduct(req: Request, res: Response) {
	try {
		const {id} = req.params
		await productsService.deleteProduct(id as string)
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}