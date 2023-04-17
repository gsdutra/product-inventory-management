import { ApplicationError } from "@/protocols";

export function categoryAlreadyExists(): ApplicationError {
	return {
		name: "CategoryAlreadyExists",
		message: "Conflict: a category with this name already exists",
		statusCode: 409,
	};
}

export function productAlreadyExists(): ApplicationError {
	return {
		name: "ProductAlreadyExists",
		message: "Conflict: a product with this name already exists",
		statusCode: 409,
	};
}

export function productNotFound(): ApplicationError {
	return {
		name: "ProductNotFound",
		message: "Product not found",
		statusCode: 404,
	};
}