import { ProfileService, UpdateProfile } from '@/entities/user'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useUpdateProfile() {
	const updateProfileMutation = useMutation<void, AxiosError, UpdateProfile>({
		mutationFn: async (data: UpdateProfile) => {
			await ProfileService.updateProfile(data)
		},
		onError: (error: unknown) => {
			console.error('Update profile error:', error)
		},
	})
	return {
		updateProfile: updateProfileMutation.mutate,
		isPending: updateProfileMutation.isPending,
		isSuccess: updateProfileMutation.isSuccess,
	}
}
