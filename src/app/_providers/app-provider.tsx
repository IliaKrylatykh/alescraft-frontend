'use client'

import { QueryClientProvider } from './query-client-provider'
import { ComposeChildren } from '@/shared/lib/react'

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<ComposeChildren>
			<QueryClientProvider />
			{children}
		</ComposeChildren>
	)
}
