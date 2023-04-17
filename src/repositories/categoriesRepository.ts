import prisma from '../database/database.connection';
import { Category } from '@prisma/client';
import * as error from '../errors/index'

export async function createOne(name: string) {
	try{
		const insertion = await prisma.category.create({
		data: {
			name
		}
	})

	return insertion
	
	}catch{
		throw error.categoryAlreadyExists()
	}	
}
