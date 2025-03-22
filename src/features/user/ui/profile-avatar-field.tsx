import { useState } from 'react'
import { Input, Label } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useUploadProfileAvatar } from '../model/use-upload-profile-avatar'
import { ImageHash } from '@/entities/file'

export function ProfileAvatarField() {
	const { setValue } = useFormContext()
	const { uploadAvatar, isPending } = useUploadProfileAvatar()
	const [error, setError] = useState<string | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (!file) return

		const formData = new FormData()
		formData.append('files', file)

		uploadAvatar(formData, {
			onSuccess: (hash: ImageHash) => {
				setValue('avatar', hash)
				setError(null)
			},
			onError: error => {
				console.error('Error uploading avatar', error)
				setError('Failed to upload avatar.')
			},
		})
	}

	return (
		<div className='grid w-full max-w-sm items-center gap-1.5'>
			<Label htmlFor='picture'>Choose new avatar</Label>
			<Input
				id='picture'
				type='file'
				onChange={handleFileChange}
				disabled={isPending}
			/>
			{isPending && <p>Uploading...</p>}
			{error && <p className='text-red-500'>{error}</p>}
		</div>
	)
}
