import prisma from '../src/database/database.connection';

async function main() {
	await prisma.products.createMany({
		data: [
			{
				name: 'PC GAMER',
				price: 150000,
				amount: 10,
			},
			{
				name: 'Geladeira',
				price: 20023,
				amount: 20,
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