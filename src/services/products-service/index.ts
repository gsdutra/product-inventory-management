import { product } from '@/protocols'

async function getAllProducts() {
	
}

async function getProductById(id: string) {
	
}

async function createProduct(body: product) {
	
}

async function updateProduct(id: string, body: product) {
	
}

async function deleteProduct(id: string) {
	
}

const productsService = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct
}

export default productsService;