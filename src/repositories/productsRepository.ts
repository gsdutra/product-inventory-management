// import {QueryResult} from 'pg';
import prisma from '../database/database.connection';
import { Product } from '@prisma/client';
import { product } from '@/protocols';

export async function findAll(): Promise<Product[]> {
  const result = await prisma.product.findMany();
  return result;
}

export async function findById(id: number): Promise<Product> {
  const result = await prisma.product.findUnique({
	where: {
	  id,
	},
  });
  return result;
}

export async function create(name: string, price: number, amount: number, categoryId: number): Promise<Product> {
  const result = await prisma.product.create({
	data: {
    name,
    price,
    amount,
    categoryId
  }
  });
  return result;
}

export async function deleteById(id: number): Promise<Product> {
  const result = await prisma.product.delete({
	where: {
	  id,
	},
  });
  return result;
}

export async function upsert(id: number, product: product): Promise<product> {
  const result = await prisma.product.upsert({
	where: {
	  id,
	},
	update: product,
	create: product,
  });
  return result;
}