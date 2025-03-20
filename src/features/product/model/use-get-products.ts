import { ProductService } from '@/entities/product'
import { useQuery } from '@tanstack/react-query'

export function useGetProducts() {
	const getProductsQuery = useQuery({
		queryKey: ['products'],
		queryFn: () => ProductService.getProducts(),
		refetchOnWindowFocus: true,
	})
	return {
		products: getProductsQuery.data,
		isPending: getProductsQuery.isPending,
	}
}
