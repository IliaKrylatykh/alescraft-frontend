'use client'

import { Spinner } from '@/shared/ui'

import { cn } from '@/shared/ui/utils'
import { ProductListItem } from './ui/product-list-item'
import { useGetProducts } from '@/features/product'

export function ProductList({ className }: { className?: string }) {
	const { products, isPending } = useGetProducts()

	if (isPending) {
		return <Spinner />
	}

	return (
		<div
			className={cn(
				'w-full grid grid-cols-1 md:grid-cols-5 gap-4 py-4 px-12',
				className
			)}
		>
			{products.products.map(item => (
				<ProductListItem key={item.id} product={item} />
			))}
		</div>
	)
}
