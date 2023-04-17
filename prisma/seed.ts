import prisma from '../src/database/database.connection';

async function main() {
	await prisma.category.create({
		data: {
			name: 'Eletrônicos'
		}
	})

	await prisma.product.createMany({
		data: [
			{
				name: 'PC GAMER',
				price: 150000,
				amount: 10,
				categoryId: 1
			},
			{
				name: 'Geladeira',
				price: 20023,
				amount: 20,
				categoryId: 1
			}
	]
  	});
}

main()
.then(()=>("Registered with success"))
.catch(e=>{
	console.error(e);
	process.exit(1);
})
.finally(async ()=>{
	await prisma.$disconnect();
})