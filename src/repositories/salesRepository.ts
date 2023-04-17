import prisma from '../database/database.connection';
import { Sale } from '@prisma/client';

export async function getStock(id: number){
	return prisma.product.findUnique({
		where: {
			id
		}
	})
}

export async function setNewStock(id: number, newAmount: number) {
	return prisma.product.update({
		where: {
			id
		},
		data: {
			amount: newAmount
		}
	})
}

export async function createOne(productId: number, amount: number, priceOnSale: number) {
	return prisma.sale.create({
		data: {
			productId,
			amount,
			priceOnSale
		}
	})
}