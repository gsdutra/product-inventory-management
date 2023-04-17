export type product = {
	name: string;
	price: number;
	amount: number;
	categoryId: number;
}

export type ApplicationError = {
	name: string;
	message: string;
	statusCode: number;
}