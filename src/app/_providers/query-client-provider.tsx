'use client'

import * as React from 'react'
import {
	QueryClient,
	QueryClientProvider as ReactQueryProvider,
} from '@tanstack/react-query'

export function QueryClientProvider({
	children,
}: {
	children?: React.ReactNode
}) {
	const queryClient = new QueryClient()

	return (
		<ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
	)
}
