import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useGetProfile } from './use-get-profile'
import { useSessionStore } from '@/entities/user/model/store/session'

export function useAuth() {
	const router = useRouter()
	const { profile, isAuthenticated } = useSessionStore()
	const { isPending } = useGetProfile()
	const [isAuthChecked, setIsAuthChecked] = useState(false)

	useEffect(() => {
		if (!isAuthenticated && !isPending) {
			router.push('/login')
		}
		setIsAuthChecked(true)
	}, [isAuthenticated, isPending, router])

	return { profile, isAuthChecked }
}
