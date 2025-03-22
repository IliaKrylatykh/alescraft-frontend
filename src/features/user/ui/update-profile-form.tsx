import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Spinner,
} from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useUpdateProfile } from '../model/use-update-profile'
import {
	Profile,
	ProfileAvatar,
	Roles,
	UpdateProfile,
	updateProfileZod,
} from '@/entities/user'
import { cn } from '@/shared/ui/utils'
import { ProfileAvatarField } from './profile-avatar-field'
import { useEffect } from 'react'

export const UpdateProfileForm = ({
	profile,
	onSuccess,
}: {
	profile: Profile
	onSuccess?: () => void
}) => {
	const { updateProfile, isPending, isSuccess } = useUpdateProfile()

	const form = useForm<UpdateProfile>({
		resolver: zodResolver(updateProfileZod),
		defaultValues: {
			role: profile.role,
			avatar: profile.avatar || undefined,
			firstName: profile.firstName || '',
			lastName: profile.lastName || '',
			description: profile.description || '',
			phone: profile.phone || '',
			youtube: profile.youtube || '',
			instagram: profile.instagram || '',
			facebook: profile.facebook || '',
			telegram: profile.telegram || '',
			whatsapp: profile.whatsapp || '',
			viber: profile.viber || '',
		},
	})

	const onSubmit = (data: UpdateProfile) => {
		updateProfile(data)
	}

	useEffect(() => {
		if (onSuccess && isSuccess) {
			onSuccess()
		}
	}, [onSuccess, isSuccess])

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
				<ProfileAvatar
					profile={profile}
					className={cn('w-40 h-40 rounded-md')}
				/>
				<ProfileAvatarField />
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>First name</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last name</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Role</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{Roles.map(role => (
										<SelectItem key={role} value={role}>
											{role}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='youtube'
					render={({ field }) => (
						<FormItem>
							<FormLabel>youtube</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='instagram'
					render={({ field }) => (
						<FormItem>
							<FormLabel>instagram</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='facebook'
					render={({ field }) => (
						<FormItem>
							<FormLabel>facebook</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='telegram'
					render={({ field }) => (
						<FormItem>
							<FormLabel>telegram</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='whatsapp'
					render={({ field }) => (
						<FormItem>
							<FormLabel>whatsapp</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='viber'
					render={({ field }) => (
						<FormItem>
							<FormLabel>viber</FormLabel>
							<FormControl>
								<Input placeholder='' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' disabled={isPending} className={cn('w-32')}>
					{isPending ? (
						<Spinner
							className='mr-2 h-4 w-4 animate-spin'
							aria-label='Update profile'
						/>
					) : (
						'Update profile'
					)}
				</Button>
			</form>
		</Form>
	)
}
