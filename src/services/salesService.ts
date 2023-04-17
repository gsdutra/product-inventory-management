import * as salesRepository from '../repositories/salesRepository'
import * as error from '../errors/index'

export async function createSale(productId: number, amountOfSale: number) {

	const { amount, price } = await salesRepository.getStock(productId)

	const newAmount = amount - amountOfSale
	if (newAmount < 0) throw error.insufficientStock()

	await salesRepository.setNewStock(productId, newAmount)

	return salesRepository.createOne(productId, amountOfSale, price)
}