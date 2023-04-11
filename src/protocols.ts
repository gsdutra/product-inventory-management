export type product = {
	id?: number;
	name: string;
	price: number;
	amount: number;
}

export type ApplicationError = {
	name: string;
	message: string;
	statusCode: number;
}