import express from 'express';
import cors from 'cors';
import { productsRouter, salesRouter, categoriesRouter } from './routes';

const app = express();

app
	.use(cors())
	.use(express.json())
	.use('/products', productsRouter)
	.use('/sales', salesRouter)
	.use('/categories', categoriesRouter)

export default app;