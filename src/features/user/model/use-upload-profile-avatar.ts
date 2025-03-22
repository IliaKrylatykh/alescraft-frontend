import { ImageHash, ImageService } from '@/entities/file'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useUploadProfileAvatar() {
	const uploadProfileAvatarMutation = useMutation<
		ImageHash,
		AxiosError,
		FormData
	>({
		mutationFn: async (formData: FormData) => {
			const data = await ImageService.uploadImages(formData)
			return data[0]
		},
		onError: (error: AxiosError) => {
			console.error('Error uploading avatar:', error)
		},
	})

	return {
		uploadAvatar: uploadProfileAvatarMutation.mutate,
		isPending: uploadProfileAvatarMutation.isPending,
	}
}
