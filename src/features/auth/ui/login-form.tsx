'use client'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@/shared/ui'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLogin } from '../model/use-login'

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>

export function LoginForm() {
	const router = useRouter()
	const { login, isPending } = useLogin()

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: 'test@test.ru',
			password: '123456',
		},
	})

	const onSubmit = (data: LoginFormValues) => {
		login(data, {
			onSuccess: () => {
				router.push('/')
			},
			onError: error => {
				if (error.response?.status === 401) {
					form.setError('password', {
						message: 'Неверные логин или пароль',
					})
				} else {
					console.error('Login failed:', error.message)
				}
			},
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='grid gap-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='name@example.com'
										type='email'
										autoCapitalize='none'
										autoComplete='email'
										autoCorrect='off'
										{...field}
									/>
								</FormControl>
								{fieldState.error && (
									<FormMessage>{fieldState.error.message}</FormMessage>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Password'
										type='password'
										autoCapitalize='none'
										autoComplete='current-password'
										autoCorrect='off'
										{...field}
									/>
								</FormControl>
								{fieldState.error && (
									<FormMessage>{fieldState.error.message}</FormMessage>
								)}
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isPending}>
						{isPending ? 'Wait...' : 'Login'}
					</Button>
				</div>
			</form>
		</Form>
	)
}
