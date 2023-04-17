import express from 'express'
import { createCategory } from '@/controllers/categoriesController'

const categoriesRouter = express.Router()

categoriesRouter
	.post('/', createCategory)

export {categoriesRouter}