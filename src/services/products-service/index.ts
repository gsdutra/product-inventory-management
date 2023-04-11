type product = {
	name: string;
	price: number;
	amount: number;
}

async function getAllProducts() {
	
}

async function getProductById(id: string) {
	
}

async function createProduct(id: string, body: product) {
	
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