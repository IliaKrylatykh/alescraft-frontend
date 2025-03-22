import { LoginForm, RegisterForm } from '@/features/auth'
import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui'
import Link from 'next/link'

export function AuthCard({ variant }: { variant: 'login' | 'register' }) {
	const isRegisterVariant = variant === 'register'

	return (
		<Card className='max-w-[500px]'>
			<CardHeader className='flex flex-col space-y-2 text-center'>
				<h1 className='text-2xl font-semibold tracking-tight'>
					{isRegisterVariant ? 'Регистрация' : 'Вход'}
				</h1>
			</CardHeader>
			<CardContent className='grid gap-4'>
				{isRegisterVariant ? <RegisterForm /> : <LoginForm />}
			</CardContent>
			<CardFooter className='flex justify-center'>
				<Link href={isRegisterVariant ? '/auth/login' : '/auth/register'}>
					<Button variant={'link'}>
						{isRegisterVariant ? 'Войти в аккаунт' : 'Зарегистрировать аккаунт'}
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
