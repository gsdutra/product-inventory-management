import { product } from '@/protocols'
import * as productsRepository from '@/repositories/productsRepository'

export async function getAllProducts() {
	return productsRepository.findAll()
}

export async function getProductById(id: number) {
	return productsRepository.findById(id)
}

export async function createProduct(data: product) {
	const { name, price, amount, categoryId } = data
	return productsRepository.create(name, price, amount, categoryId)
}

export async function updateProduct(id: number, data: product) {
	return productsRepository.upsert(id, data)
}

export async function deleteProduct(id: number) {
	return productsRepository.deleteById(id)
}