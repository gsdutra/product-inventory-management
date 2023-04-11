import express from 'express';

import {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct
} from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/getall', getAllProducts);
productsRouter.get('/getone/:id', getProductById);
productsRouter.post('/', createProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export { productsRouter };