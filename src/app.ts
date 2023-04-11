import express from 'express';
import cors from 'cors';
import { productsRouter } from './routes';

const app = express();

app
	.use(cors())
	.use(express.json())
	.use('/products', productsRouter);

export default app;