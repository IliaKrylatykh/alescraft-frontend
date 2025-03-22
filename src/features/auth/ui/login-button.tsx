'use client'

import { Button } from '@/shared/ui/button'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LoginButton() {
	const router = useRouter()

	const handleLogin = () => {
		router.push('/auth/login')
	}

	return (
		<Button variant={'outline'} onClick={handleLogin}>
			<LogIn className='mr-2 h-4 w-4' /> Login
		</Button>
	)
}
