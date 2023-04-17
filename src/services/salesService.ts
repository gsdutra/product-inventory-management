import * as salesRepository from '../repositories/salesRepository'

export async function createSale(productId: number, amount: number) {
	return salesRepository.createOne(productId, amount)
}