// import { api } from '@/shared/api/axios'
// import { Product } from '../model/types'

// const PRODUCTS = 'products'

// export const ProductService = {
// 	async getProducts() {
// 		const { data } = await api.get<Product[]>(PRODUCTS)
// 		return data
// 	},
// }

export const ProductService = {
	async getProducts() {
		const response = await fetch(`http://localhost:4200/api/products`)
		const data = await response.json()
		return data
	},
}
