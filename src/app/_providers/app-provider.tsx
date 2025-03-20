'use client'

import { QueryClientProvider } from './query-client-provider'
import { ComposeChildren } from '@/shared/lib/react'

export function AppProvider({ children }: { children: React.ReactNode }) {
	// useEffect(() => {
	// 	ProfileService.getProfile()
	// }, [])

	return (
		<ComposeChildren>
			<QueryClientProvider />
			{children}
		</ComposeChildren>
	)
}
