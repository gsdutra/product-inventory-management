// import {QueryResult} from 'pg';
import prisma from '../database/database.connection';
import {product} from '@/protocols';

async function findAll(): Promise<product[]> {
  const result = await prisma.products.findMany();
  return result;
}

async function findById(id: number): Promise<product> {
  const result = await prisma.products.findUnique({
	where: {
	  id,
	},
  });
  return result;
}

async function create(product: product): Promise<product> {
  const result = await prisma.products.create({
	data: product,
  });
  return result;
}

async function deleteById(id: number): Promise<product> {
  const result = await prisma.products.delete({
	where: {
	  id,
	},
  });
  return result;
}

async function upsert(id: number, product: product): Promise<product> {
  const result = await prisma.products.upsert({
	where: {
	  id,
	},
	update: product as product,
	create: product as product,
  });
  return result;
}