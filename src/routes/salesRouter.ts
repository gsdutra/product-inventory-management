import express from 'express'
import { createSale } from '../controllers/salesController'

const salesRouter = express.Router()

salesRouter
	.post('/', createSale)

export {salesRouter}