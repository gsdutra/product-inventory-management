import * as categoriesRepository from '@/repositories/categoriesRepository'

export async function createOne(name: string){
	return categoriesRepository.createOne(name)
}