import { api } from '@/shared/api/axios'
import { ImageHash } from '../model/types'

const IMAGES = 'images'

export const ImageService = {
	async uploadImages(imageOrImages: FormData): Promise<ImageHash[]> {
		const { data } = await api.post<ImageHash[]>(`${IMAGES}`, imageOrImages, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return data
	},
}
